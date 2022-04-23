import React from 'react';
import Head from "next/head";
import Image from "next/image";
import classNames from "classnames";

import styles from "../styles/JobPosting.module.css";

import { jobs } from "../components/JobBoard/data";
import JobCard from "../components/JobBoard/Card";
import JobListing from "../components/JobBoard/JobListing";
import Checkout from "../components/PostJob/Checkout";
import Pricing from "../components/PostJob/Pricing";
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
  onSubmit = (ev) => {
    ev.preventDefault();

    console.log(ev)

  }

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
              <JobForm  onSubmit={this.onSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
