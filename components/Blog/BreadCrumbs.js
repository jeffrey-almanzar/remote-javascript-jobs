import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/GettingHired.module.css";
import classNames from "classnames";

export default function BreadCrumbs({ breadCrumbs }) {
    return (
      <ul className="my-4 d-none d-md-flex ">
        {breadCrumbs.map(({ title, url }) => (
          <li className={classNames(styles.breadCrumb)} key={title}>
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>
    );
  }
