import _ from 'lodash';
import React from "react";
import Head from "next/head";
import Image from "next/image";
import classNames from "classnames";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import styles from "../styles/JobPosting.module.css";

import { jobs } from "../components/JobBoard/data";
import JobForm from "../components/PostJob/JobForm";

import Sidebar from "../components/PostJob/Sidebar";

import firebaseApp from '../firebase/clientApp';

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

import { fetchPostJSON } from '../config/api-helper';
// import { loadStripe } from '@stripe/stripe-js';
// const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

/*
TODO:
- upload logo
- stripe
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

  onEditorStateChange = (editorState) => {
    this.setState({
      description: editorState,
    });
  };

  onDropdownChange = (option) => {
    this.setState(option);
  };

  onJobPostingTypeChange = (type) => {
    this.setState(type)
  }

  onSubmit =  async (ev) => {
    ev.preventDefault();

    const handleSubmit = async (e) => {
      // e.preventDefault();
      // Create a Checkout Session.
      const checkoutSession = await fetchPostJSON(
        '/api/checkout_sessions',
        { amount: 100 },
      );
    
      if (checkoutSession.statusCode === 500) {
        console.error(checkoutSession.message);
        return;
      }
    
      // Redirect to Checkout.
      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout({
        // Make the id field from the Checkout Session creation API response
        // available to this file, so you can provide it as parameter here
        // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        sessionId: checkoutSession.id,
      });
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `error.message`.
      console.warn(error.message);
    };
     await handleSubmit();
     alert("Payment completed");

    const jobPayload = _.pick(this.state, [
      'title',
      'employment_type',
      'development_type',
      'experience_level',
      'main_technology',
      'apply_link',
      'company_name',
      'company_site',
      'is_featured',
    ])

    const description = draftToHtml(convertToRaw(this.state.description.getCurrentContent()));

    // Created Job
    // const db = getFirestore(firebaseApp);
    // await addDoc(collection(db, "jobs"), {description, ...jobPayload});
    // console.log("Created Job");
  };

  render() {
    const { description, is_featured } = this.state;
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
                isFeaturedPosting={is_featured}
                jobDescription={description}
                onSubmit={this.onSubmit}
                onInputChange={this.onInputChange}
                onDropdownChange={this.onDropdownChange}
                onJobPostingTypeChange={this.onJobPostingTypeChange}
                onEditorStateChange={this.onEditorStateChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
