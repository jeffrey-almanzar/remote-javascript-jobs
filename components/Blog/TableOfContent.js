import React, { useState, useEffect } from "react";
import _ from "lodash";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/GettingHired.module.css";
import classNames from "classnames";

export default function TableOfContent() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const h2Elements = document.querySelectorAll(".blog-post h2[id]");

    setSections(
      _.map(h2Elements, (el) => ({
        title: _.get(el, "outerText"),
        url: `#${_.get(el, "id")}`,
      }))
    );
  }, []);

  if (_.isEmpty(sections)) {
    return null;
  }

  return (
    <ul className={classNames(styles.tableOfContent, "mb-5 mt-4 col col-md-3")}>
      <h3>Table of Content</h3>
      {_.map(sections, ({ title, url }) => (
        <p>
          <a href={url}>{title}</a>
        </p>
      ))}
    </ul>
  );
}
