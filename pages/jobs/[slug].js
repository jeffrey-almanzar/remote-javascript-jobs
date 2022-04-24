import _ from "lodash";
import classNames from "classnames";
import Image from "next/image";
import HTMLParser from "../../components/HTMLParser";

import firebaseApp from "../../firebase/clientApp";

import Meta from "../../components/Meta";
import Breadcrumbs from "../../components/Blog/BreadCrumbs";
import { JOBS_PAGE_PATH } from "../../config/constants";

import styles from "../../styles/JobBoard.module.css";

function JobCard(props) {}

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Jobs",
    url: JOBS_PAGE_PATH,
  },
];

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

export default function Test({ jobPost }) {
  if (_.isEmpty(jobPost)) {
    return (
      <div className="container">
        <h1>Sorry, page not found</h1>
      </div>
    );
  }

  const {
    title,
    company_name,
    date,
    employment_type,
    development_type,
    experience_level,
    salary,
    technologies,
    description,
    apply_link,
    logo_url,
    company_site,
  } = jobPost;

  const mainTechnology = _.get(technologies, "0") || "";

  return (
    <>
      <Meta title={title} />
      <div className="container py-5">
        <Breadcrumbs breadCrumbs={breadcrumbs} />
        <div
          className={classNames(
            styles.jobPostContainer,
            "d-md-flex justify-content-between"
          )}
        >
          <div
            className={classNames(
              "col-md-8",
              styles.jobPostInnerContainer,
              styles.jobPostSection
            )}
          >
            <div className={classNames("d-flex", styles.jobPostMainInfo)}>
              <div className={classNames("d-none d-md-block", styles.companyLogoWrapper)}>
                <span className={styles.companyLogo}>
                  {logo_url && (
                    <Image
                      width="100px"
                      height="100px"
                      alt={company_name + "'s logo"}
                      src={logo_url}
                    />
                  )}
                </span>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <p className="d-flex align-items-center">
                    <span className="icon-company_location"></span>
                    <span>{company_name}</span>
                  </p>
                  <p>{date}</p>
                </div>
                <h2 className="pb-4 pt-3">{title}</h2>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-none d-lg-flex">
                    <p className="me-3 btn btn-light">{employment_type}</p>
                    <p className="me-3 btn btn-light">{salary}</p>
                    {mainTechnology && (
                      <p className="me-3 btn btn-light">{mainTechnology}</p>
                    )}
                    <p className="btn btn-light">{development_type}</p>
                  </div>
                  {/* <div>
                    <span
                      className={classNames(
                        styles.applyLinkVisible,
                        "btn-primary apply-link"
                      )}
                    >
                      <a target="_blank" href={apply_link}>
                        Apply
                      </a>
                    </span>
                  </div> */}
                </div>
              </div>
            </div>

            <div>
              <HTMLParser>{description}</HTMLParser>
            </div>
          </div>
          <div
            className={classNames("col-md-3 sticky-top", styles.jobPostSection)}
          >
            {/* TODO: paraphrase */}
            <h3 className="mb-3">Ready to apply for this job opening? </h3>
            <p className="mb-3">
              Please let the company know that you found this position on this
              Job Board as a way to support us, so we can keep posting cool
              jobs.
            </p>

            <p>Maybe Add Share icons here</p>
            <span
              className={classNames(
                styles.applyLinkVisible,
                "btn-primary apply-link"
              )}
            >
              <a target="_blank" href={apply_link}>
                Apply
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const jobId = _.get(context, "query.slug").split("-")[0];

  // Firebase
  const db = getFirestore(firebaseApp);
  const jobsCol = collection(db, "jobs");
  const q = query(jobsCol, where("id", "==", jobId));
  const jobSnapshot = await getDocs(q);
  const jobList = jobSnapshot.docs.map((doc) => doc.data());

  const job = _.first(jobList);

  return {
    props: {
      jobPost: job || null,
    }, // will be passed to the page component as props
  };
}
