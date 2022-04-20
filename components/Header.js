import classNames from "classnames";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

import {
  STANDING_OUT_PAGE_PATH,
  JOBS_PAGE_PATH,
  RESOURCES_PAGE_PATH,
  JOB_POSTING_PAGE_PATH,
} from "../config/constants";

import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <nav
      className={classNames(
        styles.wrapper,
        "container-fluid position-relative"
      )}
    >
      <div className="container-lg d-flex justify-content-between align-items-center h-100">
        <label htmlFor="menu" className={styles.label}>
          <span className="icon-menu d-lg-none"></span>
        </label>
        <input id="menu" className={styles.menuController} type="checkbox" />
        <p className={styles.logo}>
          <Link href="/">RemoteJSJobs</Link>
        </p>
        <div className="d-flex align-self-end align-items-center h-100">
          <ul className={styles.links}>
            <li className="me-5 mb-4 mb-lg-0">
              <Link href={JOBS_PAGE_PATH}>Jobs</Link>
            </li>
            <li className="me-5 mb-4 mb-lg-0">
              <Link href={STANDING_OUT_PAGE_PATH}>Getting hired</Link>
            </li>
            <li className="me-5 mb-4 mb-lg-0">
              <Link href={RESOURCES_PAGE_PATH}>Resources</Link>
            </li>
            <li className="me-5 mb-4 mb-lg-0">
              <p className="btn btn-primary">
                <Link href={JOB_POSTING_PAGE_PATH}>Post a job</Link>
              </p>
            </li>
          </ul>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
