import Head from "next/head";
import Image from "next/image";
import classNames from "classnames";

import styles from "../styles/JobPosting.module.css";

import { jobs } from "../components/JobBoard/data";
import JobCard from "../components/JobBoard/Card";
import JobListing from "../components/JobBoard/JobListing";

function Steps(props) {
  return (
    <ul className="list-group">
      <li className="list-group-item active">Create</li>
      <li className="list-group-item">Preview</li>
      <li className="list-group-item">Pay</li>
    </ul>
  );
}

function Pricing() {
  return (
    <div className="my-5">
      <h3 className="pb-3 mb-4">Some Text Here</h3>
      <div className="row">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Basic</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$99</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-primary"
              >
                Sign up for free
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Featured</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$149</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobForm() {
  return (
    <form className="mb-5">
      <h3 className="pb-3">Some Text Here</h3>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Job Title
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
        />
      </div>

      <div className="row">
        <div className="col mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Employment Type
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div className="col mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Development Type
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
      </div>
      <div className="row">
        <div className="col mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Experience
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div className="col mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Salary
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Technologies (multi select or checkbooks)
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Apply Link or Email
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Job Description
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
        />
      </div>
      <h3 className="pt-5 pb-3">Some Text Here</h3>
      <div className="row">
        <div className="col mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div className="col mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Company Email
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Company Website URL
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Company Logo
        </label>
        <input className="form-control" type="file" id="formFile" />
      </div>
      <Pricing />
      <div className="mb-3">
        <JobListing jobs={[jobs[0]]} />
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          Continue
        </button>
      </div>
    </form>
  );
}

export default function JobPosting(props) {
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="pt-4">Some text here</h1>
        <p>Some information here</p>
        <div className="d-flex justify-content-between">
          <div className="col-3 my-5">
            <Steps />
          </div>
          <div className="col-8">
            <JobForm />
          </div>
        </div>
      </div>
    </div>
  );
}
