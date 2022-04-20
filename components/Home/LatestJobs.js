import _ from 'lodash';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import JobListing from '../JobBoard/JobListing';
import CallToAction from './CallToAction';

import styles from "../../styles/Home.module.css";

export default function LatestJobsSection({ jobs }) {
    return (
      <div className="container job-card-container">
        <h2 className="mb-5">Latest jobs</h2>
        <JobListing jobs={jobs} />
        <CallToAction />
      </div>
    );
  }