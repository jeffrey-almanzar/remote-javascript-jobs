import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Card from "./Card";
import CardBody from "./CardBody";

import slugify from "slugify";

import { JOBS_PAGE_PATH } from "../../config/constants";
import classNames from "classnames";

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
        const { id, title, description, is_featured } = jobPost;

        const accordionKey = "job-title-" + id;

        return (
          <div key={title + "-" + index} className={classNames("accordion-item")}>
            <h2 className="accordion-header" id={accordionKey}>
              <button
                onClick={() => {
                  const path = `${id}-${slugify(title)}`;
                  const current = router.query.job; 
                  if(!isPreview) {
                    path === current ? router.replace('', undefined, { shallow: true }) : router.replace('?job=' + path, undefined, { shallow: true });
                  }
                }}
                className={classNames("accordion-button collapsed", is_featured && 'bg-yellow')}
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
              <div className="accordion-body">
                <CardBody content={description} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
