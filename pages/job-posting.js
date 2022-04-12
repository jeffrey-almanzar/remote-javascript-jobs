import Head from "next/head";
import Image from "next/image";
import classNames from "classnames";

import styles from "../styles/JobPosting.module.css";

function Steps(props) {
  return (
    <ul className="list-group">
      <li className="list-group-item active">Create</li>
      <li className="list-group-item">Preview</li>
      <li className="list-group-item">Pay</li>
    </ul>
  );
}

export default function JobPosting(props) {
  return (
    <div className="container-fluid">
      <div className="container">
        <h1>Some text here</h1>
        <p>Some information here</p>
        <div className="col-3 my-5">
            <Steps />
        </div>
      </div>
    </div>
  );
}
