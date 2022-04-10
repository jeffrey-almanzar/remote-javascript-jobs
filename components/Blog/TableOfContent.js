import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/GettingHired.module.css";
import classNames from "classnames";

export default function TableOfContent() {
  return (
    <ul className={classNames(styles.tableOfContent, "mb-5 mt-4 col col-md-3")}>
      <h3>Table of Content</h3>
      <p>
        <a>Test 1</a>
      </p>
      <p>
        <a>Test 2</a>
      </p>
      <p>
        <a>Test 3</a>
      </p>
      <p>
        <a>Test 4</a>
      </p>
    </ul>
  );
}
