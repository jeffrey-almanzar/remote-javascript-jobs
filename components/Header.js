import classNames from "classnames";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

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
          <Link href="/">
            RemoteJSJobs
          </Link>
        </p>
        <div className="d-flex align-self-end align-items-center h-100">
          <ul className={styles.links}>
            <li className="me-5 mb-4 mb-lg-0">
              <Link href="/jobs">Jobs</Link>
            </li>
            <li className="me-5 mb-4 mb-lg-0">
              <Link href="/getting-hired">Getting hired</Link>
            </li>
            <li className="me-5 mb-4 mb-lg-0">
              <Link href="/resources">Resources</Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
