import _ from "lodash";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/JobBoard.module.css";

import Filters from "../components/JobBoard/Filters";
import JobListing from "../components/JobBoard/JobListing";

import { jobs } from "../components/JobBoard/data";
import { options, VALID_JOB_FILTERS } from "../components/JobBoard/data";
import Meta from "../components/Meta";

export default function Jobs({ jobsProps }) {
  const router = useRouter();

  console.log(VALID_JOB_FILTERS)

  // console.log({jobsProps})

  // useEffect(() => {
  //   console.log(router.query)
  // });

  // useEffect(() => {
  //   console.log(router.query)
  // });

  return (
    <>
      <Meta title="Remote JavaScript Jobs (US Based)" />
      <div className="container mb-5">
        <h1 className="my-5">US Based Remote JavaScript Jobs</h1>
        <div className="row">
          <div className="col-lg-3 mb-3 mb-lg-0">
            <Filters options={options} />
          </div>
          <div className="col-lg-9 job-card-container">
            <JobListing jobs={jobsProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const hasFilters = !_.isEmpty(query);

  const filteredJobs = [];

  if (hasFilters) {
    _.keys(query).forEach(filter => {
      if(VALID_JOB_FILTERS[filter]) {
        jobs.forEach(job => {
          job[filter] === query[filter] && filteredJobs.push(job);
        })
      }
    })

  }

  return {
    props: {
      jobsProps: hasFilters ? filteredJobs : jobs,
    }, // will be passed to the page component as props
  };
}
