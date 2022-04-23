import Pricing from "./Pricing";
import JobListing from "../JobBoard/JobListing";
import Checkout from "./Checkout";

export default function JobForm() {
  return (
    <form className="mb-5">
      <div id="sec1" className="anchor"></div>
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
      <div className="mb-3">{/* <JobListing jobs={[jobs[0]]} /> */}</div>
      <Checkout />
    </form>
  );
}
