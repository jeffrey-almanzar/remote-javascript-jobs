import _ from "lodash";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import classNames from "classnames";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  writeBatch,
  where,
  query,
} from "firebase/firestore/lite";

import firebaseApp from "../firebase/clientApp";

import { fetchPostJSON } from "../config/api-helper";
import getStripe from "../stripe/get-stripe";

import {
  STRIPE_PRODUCT_FEATURED_JOB_PRICE_ID,
  STRIPE_PRODUCT_STANDARD_JOB_PRICE_ID,
} from "..//stripe/products";

import JobForm from "../components/PostJob/JobForm";
import Sidebar from "../components/PostJob/Sidebar";

import styles from "../styles/JobPosting.module.css";

/*
TODO:
- upload logo
- dropdowns
- styling
- confirmation page
*/

export default class JobPosting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      // date: job.date,
      employment_type: "",
      development_type: "",
      experience_level: "",
      // min_salary: '80',
      // max_salary: '100',
      salary: "",
      main_technology: "",
      description: EditorState.createEmpty(),
      apply_link: "",
      is_open_worldwide: true, // Selecting 'Yes' means your future hire can work anywhere in the world without any location or time zone restrictions!

      // company info
      company_name: "",
      logo_url: "",
      company_site: "https://example.com",
      company_email: "test@gamil.com", // stays private - for inbox

      // highlight info
      is_featured: false,
    };
  }

  onInputChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  onFileChange = async (ev) => {
    const reader = new FileReader();
    const data = reader.readAsDataURL(ev.target.files[0]);
    // Source: https://www.javascripttutorial.net/web-apis/javascript-filereader/
    // Recheck for file size
    reader.addEventListener("load", (e) => {
      const file = e.target.result;
      this.setState({ logo_url: file });
    });
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      description: editorState,
    });
  };

  onDropdownChange = (option) => {
    this.setState(option);
  };

  onJobPostingTypeChange = (type) => {
    this.setState(type);
  };

  onSubmit = async (ev) => {
    ev.preventDefault();

    const jobPayload = _.pick(this.state, [
      "title",
      "employment_type",
      "development_type",
      "experience_level",
      "salary",
      "main_technology",
      "apply_link",
      "company_name",
      "company_email",
      "company_site",
      "is_featured",
    ]);

    const description = draftToHtml(
      convertToRaw(this.state.description.getCurrentContent())
    );

    // await this.handleCheckout({ description, ...jobPayload });
  };

  handleCheckout = async (jobInfo) => {
    const { is_featured = false } = jobInfo;
    const priceInfo = is_featured
      ? { price: STRIPE_PRODUCT_FEATURED_JOB_PRICE_ID, quantity: 1 }
      : { price: STRIPE_PRODUCT_STANDARD_JOB_PRICE_ID, quantity: 1 };

    const response = await fetchPostJSON(
      "/api/checkout_sessions/cart",
      priceInfo
    );

    if (response.statusCode > 399) {
      console.error(response.message);
      // setErrorMessage(response.message);
      // setLoading(false);
      return;
    }

    // TODO: Create job here.
    // Created Job
    // const db = getFirestore(firebaseApp);
    // await addDoc(collection(db, "jobs"), {description, ...jobPayload});
    // console.log("Created Job");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
  };

  render() {
    const {
      title,
      company_name,
      description,
      is_featured,
      employment_type,
      development_type,
      experience_level,
      main_technology,
      salary,
      logo_url,
    } = this.state;

    return (
      <div className="container-fluid">
        <div className="container">
          <h1 className="pt-4">Some text here</h1>
          <p>Some information here</p>
          <div className="d-flex justify-content-between">
            <div className="col-3 my-5">
              <Sidebar />
            </div>
            <div className="col-8">
              <JobForm
                jobTitle={title}
                jobDescriptionText={draftToHtml(
                  convertToRaw(this.state.description.getCurrentContent())
                )}
                logo_url={logo_url}
                company_name={company_name}
                employment_type={employment_type}
                development_type={development_type}
                experience_level={experience_level}
                main_technology={main_technology}
                salary={salary}
                isFeaturedPosting={is_featured}
                jobDescription={description}
                onSubmit={this.onSubmit}
                onInputChange={this.onInputChange}
                onDropdownChange={this.onDropdownChange}
                onJobPostingTypeChange={this.onJobPostingTypeChange}
                onEditorStateChange={this.onEditorStateChange}
                onFileChange={this.onFileChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
