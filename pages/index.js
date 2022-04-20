import _ from "lodash";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import classNames from "classnames";

import { JOBS_PAGE_PATH } from "../config/constants";

import { jobs } from "../components/JobBoard/data";
// import { transformedJobs } from "../getSampleJobs";
import GettingHiredSection from "../components/Home/GettingHired";
import Hero from "../components/Home/Hero";
import LatestJobsSection from "../components/Home/LatestJobs";
import JobCategoriesSection from "../components/Home/JobCategories";

const firstJobs = jobs;

import Meta from "../components/Meta";

export default function Home({ jobs }) {
  return (
    <>
      <Meta title="Remote JavaScript Jobs (US Based)" />

      <div className="mb-5">
        <Hero />
        <div className="section">
          <GettingHiredSection />
        </div>
        <div className="section">
          <LatestJobsSection jobs={firstJobs} />
        </div>
        <div className="section">
          <JobCategoriesSection />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      jobs: firstJobs,
    },
  };
}
