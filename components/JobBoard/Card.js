import _ from "lodash";
import classNames from "classnames";
import Image from "next/image";

import styles from "../../styles/JobBoard.module.css";

export default function Card(props) {
  const {
    title,
    company_name,
    date,
    technologies,
    salary,
    development_type,
    employment_type,
    logo_url,
    apply_link,
  } = props;

  const mainTechnology = _.get(technologies, "0") || "";

  return (
    <div className={classNames("d-flex w-100 position-relative")}>
      <div className="me-4">
        {logo_url && (
          <Image
            className={styles.companyLogo}
            width="100px"
            height="100px"
            alt={company_name + "'s logo"}
            src={logo_url}
          />
        )}
      </div>
      <div className="flex-grow-1">
        <div className="w-100 d-flex justify-content-between mb-3">
          <p className="d-flex align-items-center">
            <span className="icon-company_location"></span>
            <span>{company_name}</span>
          </p>
          <p>{date}</p>
        </div>

        <h4 className="mb-3">{title}</h4>
        <div className="d-flex">
          <p className="me-3 btn btn-light">{employment_type}</p>
          <p className="me-3 btn btn-light">{salary}</p>
          {mainTechnology && (
            <p className="me-3 btn btn-light">{mainTechnology}</p>
          )}
          <p className="btn btn-light">{development_type}</p>
        </div>
      </div>
      <span className={classNames(styles.applyLink, "btn-primary apply-link")}>
        <a target="_blank" href={apply_link}>
          Apply
        </a>
      </span>
    </div>
  );
}
