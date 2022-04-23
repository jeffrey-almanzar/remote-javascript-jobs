import _ from 'lodash'
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Pricing from "./Pricing";
// import JobListing from "../JobBoard/JobListing";
import Checkout from "./Checkout";
import DropDown from "../JobBoard/Dropdown";
import {
  EMPLOYMENT_TYPE,
  DEVELOPMENT_TYPE,
  EXPERIENCE_LEVEL,
  SALARY_ESTIMATE,
  MAIN_TECHNOLOGY,
} from "../JobBoard/data";

export default function JobForm({ onSubmit, onInputChange, onDropdownChange, onJobPostingTypeChange }) {
  return (
    <form className="mb-5" onSubmit={onSubmit}>
      <div id="sec1" className="anchor"></div>
      <h3 className="pb-3">Position Details</h3>
      <div className="mb-3">
        <label htmlhtmlFor="title" className="form-label">
          Job Title
        </label>
        <input
          onChange={onInputChange}
          type="text"
          className="form-control"
          name="title"
          id="title"
        />
      </div>

      <div className="row">
        <div className="col mb-3">
          <label htmlhtmlFor="formGroupExampleInput" className="form-label">
            Employment Type
          </label>
          <DropDown onClick={onDropdownChange} {...EMPLOYMENT_TYPE}/>
        </div>
        <div className="col mb-3">
          <label htmlhtmlFor="formGroupExampleInput" className="form-label">
            Development Type
          </label>
          <DropDown {...DEVELOPMENT_TYPE} onClick={onDropdownChange} />
        </div>
      </div>
      <div className="row">
        <div className="col mb-3">
          <label htmlhtmlFor="formGroupExampleInput" className="form-label">
            Experience
          </label>
          <DropDown {...EXPERIENCE_LEVEL} onClick={onDropdownChange} />
        </div>
        <div className="col mb-3">
          <label htmlhtmlFor="formGroupExampleInput" className="form-label">
            Salary
          </label>
          <DropDown {...SALARY_ESTIMATE} onClick={onDropdownChange} />
        </div>
      </div>

      <div className="mb-3">
        <label htmlhtmlFor="formGroupExampleInput2" className="form-label">
          Main Technology
        </label>
        <DropDown {...MAIN_TECHNOLOGY} onClick={onDropdownChange} />
      </div>
      <div className="mb-3">
        <label htmlhtmlFor="formGroupExampleInput2" className="form-label">
          Job Description
        </label>
        {/* <Editor */}
        {/* // editorState={editorState}
        // toolbarClassName="toolbarClassName"
        // wrapperClassName="wrapperClassName"
        // editorClassName="editorClassName"
        // onEditorStateChange={this.onEditorStateChange} */}
        {/* /> */}
      </div>
      <div className="mb-3">
        <label htmlhtmlFor="apply_link" className="form-label">
          Apply Link or Email
        </label>
        <input
          onChange={onInputChange}
          type="text"
          className="form-control"
          name="apply_link"
          id="apply_link"
        />
      </div>
      <h3 className="pt-5 pb-3">Company Details</h3>
      <div className="row">
        <div className="col mb-3">
          <label htmlhtmlFor="company_name" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            className="form-control"
            name="company_name"
            id="company_name"
            onChange={onInputChange}
          />
        </div>
        <div className="col mb-3">
          <label htmlhtmlFor="company_email" className="form-label">
            Company Email
          </label>
          <input
            type="text"
            className="form-control"
            id="company_email"
            name="company_email"
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlhtmlFor="company_site" className="form-label">
          Company Website URL
        </label>
        <input
          type="text"
          className="form-control"
          id="company_site"
          name="company_site"
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlhtmlFor="formFile" className="form-label">
          Company Logo
        </label>
        <input className="form-control" type="file" id="formFile" />
      </div>
      <Pricing onJobPostingTypeChange={onJobPostingTypeChange} />
      <div className="mb-3">{/* <JobListing jobs={[jobs[0]]} /> */}</div>
      <Checkout  onInputChange={onInputChange} />
    </form>
  );
}
