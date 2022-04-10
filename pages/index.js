import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import classNames from "classnames";

import image from "../public/images/homepageHero.gif";
import standout from "../public/images/standout.png";
import competence from "../public/images/competence.png";
import negotiation from "../public/images/negotiation.png";

import { jobs } from "../components/JobBoard/data";
import JobListing from "../components/JobBoard/JobListing";

function Hero(props) {
  return (
    <div className={classNames(styles.hero)}>
      <div className="container py-5">
        <div className="d-flex justify-content-between">
          <div className="align-self-center">
            <p>US Based</p>
            <h1 className="mb-3">Remote JavaScript Jobs</h1>
            <p className="mb-4 lead">
              The most reliable remote JavaScript jobs on the internet.
            </p>
            <p className="btn btn-warning">
              <Link href="/jobs">Show me the jobs</Link>
            </p>
          </div>
          <div>
            <Image src={image} />
          </div>
        </div>
      </div>
    </div>
  );
}

function GettingHiredSection(props) {
  return (
    <div className="container py-5">
      <h2>Getting hired</h2>
      <div className="d-md-flex justify-content-between">
        <div className="col-md-3 mt-5 text-center">
          <Image height={250} width={250} src={standout} />
          <h4 className="mb-2">Standing out</h4>
          <p>
            Are you applying and not getting interviews? Assuming you don’t have
            much experience, you…
          </p>
          <p className="mt-3">
            <a href="#" className={styles.cta}>
              Learn more
            </a>
          </p>
        </div>
        <div className="col-md-3 mt-5 text-center">
          <Image height={250} width={250} src={competence} />
          <h4 className="mb-2">Demonstrating competence</h4>
          <p>
            Are you applying and not getting interviews? Assuming you don’t have
            much experience, you…
          </p>
          <p className="mt-3">
            <a href="#" className={styles.cta}>
              Learn more
            </a>
          </p>
        </div>
        <div className="col-md-3 mt-5 text-center">
          <Image height={250} width={250} src={negotiation} />
          <h4 className="mb-2">Handling offers</h4>
          <p>
            Are you applying and not getting interviews? Assuming you don’t have
            much experience, you…
          </p>
          <p className="mt-3">
            <a href="#" className={styles.cta}>
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function CallToAction(props) {
  const { title = "View all the latest jobs", url = "/jobs" } = props;
  return (
    <p className={classNames(styles.sectionCallToAction, "mt-4 text-center")}>
      <Link href={url}>{title}</Link>
    </p>
  );
}

function LatestJobsSection(props) {
  return (
    <div className="container">
      <h2 className="mb-5">Latest jobs</h2>
      <JobListing jobs={jobs} />
      <CallToAction />
    </div>
  );
}

function JobCategoriesSection (props) {
  return (
    <div className="container">
      <h2 className="mb-5">Popular jobs</h2>
      <ul className="d-md-flex justify-content-between flex-wrap">
        <li className={classNames("col-md-4 d-flex flex-column justify-content-center text-center", styles.jobCategoryItem)}>
          <span className={classNames(styles.jobCategoryIcon, "icon-native mb-3")}></span>
          <span>React Jobs</span>
        </li>
        <li className={classNames("col-md-4 d-flex flex-column justify-content-center text-center", styles.jobCategoryItem)}>
          <span className={classNames(styles.jobCategoryIcon, "icon-vue mb-3")}></span>
          <span>Category name</span>
        </li>
        <li className={classNames("col-md-4 d-flex flex-column justify-content-center text-center", styles.jobCategoryItem)}>
          <span className={classNames(styles.jobCategoryIcon, "icon-angular mb-3")}></span>
          <span>Category name</span>
        </li>
        <li className={classNames("col-md-4 d-flex flex-column justify-content-center text-center", styles.jobCategoryItem)}>
          <span className={classNames(styles.jobCategoryIcon, "icon-jquery mb-3")}></span>
          <span>Category name</span>
        </li>
        <li className={classNames("col-md-4 d-flex flex-column justify-content-center text-center", styles.jobCategoryItem)}>
          <span className={classNames(styles.jobCategoryIcon, "icon-node mb-3")}></span>
          <span>Category name</span>
        </li>
        <li className={classNames("col-md-4 d-flex flex-column justify-content-center text-center", styles.jobCategoryItem)}>
          <span className={classNames(styles.jobCategoryIcon, "icon-native mb-3")}></span>
          <span>Category name</span>
        </li>
      </ul>
      <CallToAction title="View all categories" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="mb-5">
      <Hero />
      <GettingHiredSection />
      <LatestJobsSection />
      <JobCategoriesSection />
    </div>
  );
}
