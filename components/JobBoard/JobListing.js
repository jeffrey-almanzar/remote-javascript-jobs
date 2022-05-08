import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Card from "./Card";
import CardBody from "./CardBody";

import slugify from "slugify";

import { JOBS_PAGE_PATH } from "../../config/constants";
import classNames from "classnames";

import styles from '../../styles/JobBoard.module.css'

export default function JobListing({ jobs, isPreview }) {
  const router = useRouter();

  useEffect(() => {
    // TODO: use regex
    if (!isPreview && window.location.href.includes("job=")) {
      router.push("/jobs/" + window.location.href.split("job=")[1], undefined, {
        shallow: true,
      });
    }
  }, []);

  return (
    <div className="accordion" id="accordionExample-2">
      {jobs.map((jobPost, index) => {
        const { id, title, description, is_featured, apply_link } = jobPost;

        const accordionKey = "job-title-" + id;

        const path = `${id}-${slugify(title)}`;
        const current = router.query.job;

        const share = window.location.origin + "/jobs?job=" + path;

        return (
          <div
            key={title + "-" + index}
            className={classNames("accordion-item")}
          >
            <h2 className="accordion-header" id={accordionKey}>
              <button
                onClick={() => {
                  const path = `${id}-${slugify(title)}`;
                  const current = router.query.job;
                  // if (!isPreview) {
                  //   path === current
                  //     ? router.replace("", undefined, { shallow: true })
                  //     : router.replace("?job=" + path, undefined, {
                  //         shallow: true,
                  //       });
                  // }
                }}
                className={classNames(
                  "accordion-button collapsed",
                  is_featured && "bg-yellow"
                )}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapseOne2" + accordionKey}
                aria-expanded="false"
                aria-controls={"collapseOne2" + accordionKey}
              >
                <Card {...jobPost} />
              </button>
            </h2>
            <div
              id={"collapseOne2" + accordionKey}
              className="accordion-collapse collapse"
              aria-labelledby="headingOne2"
            >
              <div className="accordion-body p-4">
                <div
                  className={classNames(
                    "col-md-4 float-end",
                    styles.jobPostSection
                  )}
                >
                  <span
                    className={classNames(
                      styles.applyLinkVisible,
                      "btn-primary apply-link"
                    )}
                  >
                    <a target="_blank" rel="noreferrer" href={apply_link}>
                      Apply
                    </a>
                  </span>
                  <p>Share</p>
                  <span>{share}</span>
                </div>
                <CardBody content={description} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
