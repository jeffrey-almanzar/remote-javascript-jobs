import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/JobBoard.module.css";

import Filters from "../components/JobBoard/Filters";
import JobListing from "../components/JobBoard/JobListing";

import { jobs } from "../components/JobBoard/data";

export default function Jobs() {
  return (
    <div className="container mb-5">
      <h1 className="my-5">US Based Remote JavaScript Jobs</h1>
      <div className="row">
        <div className="col-lg-3 mb-3 mb-lg-0">
          <Filters />
        </div>
        <div className="col-lg-9 job-card-container">
          <JobListing jobs={jobs} />
        </div>
      </div>
    </div>
  );
}
