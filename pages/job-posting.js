import React from "react";
import Head from "next/head";
import Image from "next/image";
import classNames from "classnames";

import styles from "../styles/JobPosting.module.css";

import { jobs } from "../components/JobBoard/data";
import JobForm from "../components/PostJob/JobForm";

function Steps(props) {
  return (
    <div className="mt-5 mb-3 sticky-top" id="side">
      <ul
        className="nav flex-md-column flex-row justify-content-between"
        id="sidenav"
      >
        <li className="nav-item">
          <a href="#sec1" className="nav-link active pl-0">
            Create
          </a>
        </li>
        <li className="nav-item">
          <a href="#sec2" className="nav-link pl-0">
            Preview
          </a>
        </li>
        <li className="nav-item">
          <a href="#sec3" className="nav-link pl-0">
            Pay
          </a>
        </li>
      </ul>
    </div>
  );
}

// Maybe render the sections using Tabs or Scroll Spy
// Let's try to only use one page for create, preview, and pay.

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
      description: "",
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

  onDropdownChange = (option) => {
    this.setState(option);
  };

  onJobPostingTypeChange = (type) => {
    this.setState(type)
  }

  onSubmit = (ev) => {
    ev.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <h1 className="pt-4">Some text here</h1>
          <p>Some information here</p>
          <div className="d-flex justify-content-between">
            <div className="col-3 my-5">
              <Steps />
            </div>
            <div className="col-8">
              <JobForm
                onSubmit={this.onSubmit}
                onInputChange={this.onInputChange}
                onDropdownChange={this.onDropdownChange}
                onJobPostingTypeChange={this.onJobPostingTypeChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
