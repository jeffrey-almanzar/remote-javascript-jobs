import classNames from "classnames";

import styles from "../../styles/JobPosting.module.css";
import { FEATURED_JOB_PRICE, STANDARD_JOB_PRICE } from '../../config/constants';

export default function Pricing({ onJobPostingTypeChange, isFeaturedPosting }) {
  return (
    <div className="my-5">
      <div id="preview" className="anchor"></div>
      <h2 className="pb-4 mb-4">2. Preview and Standout</h2>
      <div className="row">
        <div className="col-12 col-md-6">
          <div
            className={classNames(
              "card mb-4 rounded-3 shadow-sm",
              styles.jobPostingType,
              !isFeaturedPosting && styles.selectedJobPostingType
            )}
            onClick={() => onJobPostingTypeChange({ is_featured: false })}
          >
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Basic</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">{STANDARD_JOB_PRICE}</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              {/* <button
                type="button"
                className="w-100 btn btn-lg btn-outline-primary"
              >
                Sign up for free
              </button> */}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div
            className={classNames(
              "card mb-4 rounded-3 shadow-sm",
              styles.jobPostingType,
              isFeaturedPosting && styles.selectedJobPostingType
            )}
            onClick={() => onJobPostingTypeChange({ is_featured: true })}
          >
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Featured</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">{FEATURED_JOB_PRICE}</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              {/* <button type="button" className="w-100 btn btn-lg btn-primary">
                Get started
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
