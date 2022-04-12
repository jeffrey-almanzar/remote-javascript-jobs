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
        <label htmlhtmlFor="formGroupExampleInput" className="form-label">
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
          <label htmlhtmlFor="formGroupExampleInput" className="form-label">
            Employment Type
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div className="col mb-3">
          <label htmlhtmlFor="formGroupExampleInput" className="form-label">
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
          <label htmlhtmlFor="formGroupExampleInput" className="form-label">
            Experience
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div className="col mb-3">
          <label htmlhtmlFor="formGroupExampleInput" className="form-label">
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
        <label htmlhtmlFor="formGroupExampleInput2" className="form-label">
          Technologies (multi select or checkbooks)
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
        />
      </div>
      <div className="mb-3">
        <label htmlhtmlFor="formGroupExampleInput2" className="form-label">
          Apply Link or Email
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
        />
      </div>
      <div className="mb-3">
        <label htmlhtmlFor="formGroupExampleInput2" className="form-label">
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
          <label htmlhtmlFor="formGroupExampleInput" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div className="col mb-3">
          <label htmlhtmlFor="formGroupExampleInput" className="form-label">
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
        <label htmlhtmlFor="formGroupExampleInput2" className="form-label">
          Company Website URL
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
        />
      </div>
      <div className="mb-3">
        <label htmlhtmlFor="formFile" className="form-label">
          Company Logo
        </label>
        <input className="form-control" type="file" id="formFile" />
      </div>
      <Pricing />
      <div className="mb-3">
        <JobListing jobs={[jobs[0]]} />
      </div>
      {/* <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          Continue
        </button>
      </div> */}
      <Checkout />
    </form>
  );
}

function Checkout() {
  return (
    <div className="">
      <h4 className="mb-3">Payment</h4>

      <div className="my-3">
        {/* <div className="form-check">
          <input
            id="credit"
            name="paymentMethod"
            type="radio"
            className="form-check-input"
            checked=""
            required=""
          />
          <label className="form-check-label" htmlFor="credit">
            Credit card
          </label>
        </div>
        <div className="form-check">
          <input
            id="debit"
            name="paymentMethod"
            type="radio"
            className="form-check-input"
            required=""
          />
          <label className="form-check-label" htmlFor="debit">
            Debit card
          </label>
        </div> */}
        {/* <div className="form-check">
          <input
            id="paypal"
            name="paymentMethod"
            type="radio"
            className="form-check-input"
            required=""
          />
          <label className="form-check-label" htmlFor="paypal">
            PayPal
          </label>
        </div> */}
      </div>
      <div className="row gy-3">
        <div className="col-md-6">
          <label htmlFor="cc-name" className="form-label">
            Name on card
          </label>
          <input
            type="text"
            className="form-control"
            id="cc-name"
            placeholder=""
            required=""
          />
          <small className="text-muted">Full name as displayed on card</small>
          <div className="invalid-feedback">Name on card is required</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="cc-number" className="form-label">
            Credit card number
          </label>
          <input
            type="text"
            className="form-control"
            id="cc-number"
            placeholder=""
            required=""
          />
          <div className="invalid-feedback">Credit card number is required</div>
        </div>

        <div className="col-md-3">
          <label htmlFor="cc-expiration" className="form-label">
            Expiration
          </label>
          <input
            type="text"
            className="form-control"
            id="cc-expiration"
            placeholder=""
            required=""
          />
          <div className="invalid-feedback">Expiration date required</div>
        </div>

        <div className="col-md-3">
          <label htmlFor="cc-cvv" className="form-label">
            CVV
          </label>
          <input
            type="text"
            className="form-control"
            id="cc-cvv"
            placeholder=""
            required=""
          />
          <div className="invalid-feedback">Security code required</div>
        </div>
        <div className="col">
          <label htmlFor="cc-expiration" className="form-label">
            Promo code
          </label>
          <div className="input-group">
            <input type="text" className="form-control" />
            <button type="submit" className="btn btn-secondary">
              Redeem
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end my-5">
        <button type="submit" className="btn btn-primary">
          Confirm
        </button>
      </div>
    </div>
  );
}

// Maybe render the sections using Tabs or Scroll Spy
// Let's try to only use one page for create, preview, and pay.

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
