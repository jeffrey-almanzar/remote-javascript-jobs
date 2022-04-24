import _ from "lodash";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import CallToAction from "./CallToAction";

import styles from "../../styles/Home.module.css";

export default function JobCategoriesSection(props) {
  return (
    <div className="container">
      <h2 className="mb-5">Popular jobs</h2>
      <ul className="d-md-flex justify-content-between flex-wrap">
        <li
          className={classNames(
            "col-md-4 d-flex flex-column justify-content-center text-center",
            styles.jobCategoryItem
          )}
        >
          <span
            className={classNames(styles.jobCategoryIcon, "icon-native mb-3")}
          ></span>
          <span>React Jobs</span>
        </li>
        <li
          className={classNames(
            "col-md-4 d-flex flex-column justify-content-center text-center",
            styles.jobCategoryItem
          )}
        >
          <span
            className={classNames(styles.jobCategoryIcon, "icon-vue mb-3")}
          ></span>
          <span>Vue Jobs</span>
        </li>
        <li
          className={classNames(
            "col-md-4 d-flex flex-column justify-content-center text-center",
            styles.jobCategoryItem
          )}
        >
          <span
            className={classNames(styles.jobCategoryIcon, "icon-angular mb-3")}
          ></span>
          <span>Angular jobs</span>
        </li>
        <li
          className={classNames(
            "col-md-4 d-flex flex-column justify-content-center text-center",
            styles.jobCategoryItem
          )}
        >
          <span
            className={classNames(styles.jobCategoryIcon, "icon-jquery mb-3")}
          ></span>
          <span>jQuery Jobs</span>
        </li>
        <li
          className={classNames(
            "col-md-4 d-flex flex-column justify-content-center text-center",
            styles.jobCategoryItem
          )}
        >
          <span
            className={classNames(styles.jobCategoryIcon, "icon-node mb-3")}
          ></span>
          <span>Node jobs</span>
        </li>
        <li
          className={classNames(
            "col-md-4 d-flex flex-column justify-content-center text-center",
            styles.jobCategoryItem
          )}
        >
          <span
            className={classNames(styles.jobCategoryIcon, "icon-native mb-3")}
          ></span>
          <span>Next Jobs</span>
        </li>
      </ul>
      <CallToAction title="View all categories" />
    </div>
  );
}
