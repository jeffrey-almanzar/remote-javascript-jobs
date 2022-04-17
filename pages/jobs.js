import _ from "lodash";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";

import firebaseApp from '../firebase/clientApp';
import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection, getDocs, setDoc, addDoc } from 'firebase/firestore/lite';

import Filters from "../components/JobBoard/Filters";
import JobListing from "../components/JobBoard/JobListing";
import Meta from "../components/Meta";

import { options, VALID_JOB_FILTERS } from "../components/JobBoard/data";
import { transformedJobs } from '../getSampleJobs';

import styles from "../styles/JobBoard.module.css";

export default function Jobs({ jobsProps }) {
  const router = useRouter();
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
        transformedJobs.forEach(job => {
          job[filter] === query[filter] && filteredJobs.push(job);
        })
      }
    })

  }

  // Firebase 
  const db = getFirestore(firebaseApp);

  // async function getJobs(db) {
    const jobsCol = collection(db, 'jobs');
    const jobSnapshot = await getDocs(jobsCol);
    const jobList = jobSnapshot.docs.map(doc => doc.data());
    console.log(jobList)
    // return jobList;
  // }

  // getJobs(db);
  // -------------

  // if(false) {
  //   transformedJobs.forEach( async job => {
  //     const jobsCol = collection(db, 'jobs');
  //     await addDoc(jobsCol, transformedJobs[0]);
  //   })
  // }

  return {
    props: {
      jobsProps: transformedJobs,
    }, // will be passed to the page component as props
  };
}
