import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

import ThemeToggle from "./ThemeToggle";

import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <nav className={classNames(styles.wrapper, "container-fluid position-relative")}>
      <div className="container d-flex justify-content-between align-items-center h-100">
        <label htmlFor="test" className={styles.label}>
          <span className="icon-menu d-lg-none"></span>
        </label>
        <input id="test" className={styles.testCheck} type="checkbox" />
        <p>
          Remote<span>JS</span>Jobs
        </p>
        <ul className={styles.links}>
          <li className="me-5 mb-4 mb-lg-0">
            <Link href="/">Home</Link>
          </li>
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
    </nav>
  );
}
