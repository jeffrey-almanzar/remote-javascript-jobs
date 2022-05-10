import _ from "lodash";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import moment from "moment";

import firebaseApp from "../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  writeBatch,
  where,
  // orderBy,
  query,
} from "firebase/firestore/lite";

import Filters from "../components/JobBoard/Filters";
import JobListing from "../components/JobBoard/JobListing";
import Meta from "../components/Meta";
import Hero from "../components/Home/Hero";

import { options, VALID_JOB_FILTERS } from "../components/JobBoard/data";
// import { transformedJobs } from "../getSampleJobs";

import styles from "../styles/JobBoard.module.css";

export default function Jobs({ jobsProps }) {
  const router = useRouter();
  return (
    <>
      <Meta title="Remote JavaScript Jobs (US Based)" />
      <Hero />
      <div className="container my-5">
        {/* <h1 className="my-5">US Based Remote JavaScript Jobs</h1> */}
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
  const { query: params } = context;

  // Firebase
  const db = getFirestore(firebaseApp);
  const jobsCol = collection(db, "jobs");

  const filters = [];

  if (!_.isEmpty(params)) {
    _.keys(params).forEach((filter) => {
      if (VALID_JOB_FILTERS[filter]) {
        params[filter] && filters.push({ key: filter, value: params[filter] });
      }
    });
  }

  const hasFilters = !_.isEmpty(filters);

  const queries = hasFilters
    ? filters.map((filter) => where(filter.key, "==", filter.value))
    : [];

  const q = query(jobsCol, where("is_featured", "==", false), ...queries);
  const fq = query(jobsCol, where("is_featured", "==", true), ...queries);

  const jobSnapshot = await getDocs(q);
  const jobList = jobSnapshot.docs.map((doc) => doc.data());

  const featuredJobSnapshot = await getDocs(fq);
  const featuredJList = featuredJobSnapshot.docs.map((doc) => doc.data());

  const ordered = _.orderBy(
    jobList,
    [
      (item) => {
        return moment(item.date).format("YYYY-MM-DD");
      },
    ],
    ["desc"]
  );

  const featuredOrdered = _.orderBy(
    featuredJList,
    [
      (item) => {
        return moment(item.date).format("YYYY-MM-DD");
      },
    ],
    ["desc"]
  );

  return {
    props: {
      jobsProps: _.concat(featuredOrdered, ordered),
    },
  };
}
