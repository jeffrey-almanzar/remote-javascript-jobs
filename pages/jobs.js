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
    <div className={classNames(styles.filters, "p-4 sticky-top")}>
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

const jobs = [
  {
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Full-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Full-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Full-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Full-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Full-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
];

function JobListing({ jobs }) {
  return (
    <div className="accordion" id="accordionExample-2">
      {jobs.map((accordion, index) => {
        const {
          title,
          company_name,
          date,
          technologies,
          salary,
          development_type,
          employment_type,
          logo_url,
          description,
        } = accordion;

        const accordionKey = title.replace(" ", "") + index;

        return (
          <div key={title + "-" + index} className="accordion-item">
            <h2 className="accordion-header" id={accordionKey}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapseOne2" + accordionKey}
                aria-expanded="false"
                aria-controls={"collapseOne2" + accordionKey}
              >
                <div>
                  <p>{date}</p>
                  <Image width="150px" height="150px" src={logo_url} />
                  <p>{company_name}</p>
                  <h4>{title}</h4>
                  <div>
                    <p>{employment_type}</p>
                    <p>{salary}</p>
                    <p>{technologies[0]}</p>
                    <p>{development_type}</p>
                  </div>
                </div>
              </button>
            </h2>
            <div
              id={"collapseOne2" + accordionKey}
              className="accordion-collapse collapse"
              aria-labelledby="headingOne2"
              data-bs-parent="#accordionExample-2"
            >
              <div className="accordion-body color-white bg-black">
                {/* {description} */}
                test
              </div>
            </div>
          </div>
        );
      })}
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
        <div className="col-8">
          <JobListing jobs={jobs} />
        </div>
      </div>
    </div>
  );
}
