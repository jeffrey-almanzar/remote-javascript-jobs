import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/JobBoard.module.css";



function DropDown({ title }) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}

const options = [
  "Employment type",
  "Development type",
  "Experience level",
  "Main technology",
  "Salary",
];

function Filters() {
  return (
    <div className={classNames(styles.filters, 'p-4')}>
      <h3 className="mb-3">Filters</h3>
      <ul>
        {options.map((option) => (
          <li key={option} className="mb-2">
            <DropDown title={option} />
          </li>
        ))}
      </ul>
      <p>Reset filters</p>
    </div>
  );
}

export default function Jobs() {
  return (
    <div className="container mb-5">
      <h1 className="my-5">US Based Remote JavaScript Jobs</h1>
      <div className="row">
        <div className="col-4">
          <Filters />
        </div>
        <div className="col-8">Test</div>
      </div>
    </div>
  );
}
