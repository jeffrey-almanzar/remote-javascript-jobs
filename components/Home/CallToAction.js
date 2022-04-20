import _ from 'lodash';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import styles from "../../styles/Home.module.css";

export default function CallToAction(props) {
    const { title = "View all the latest jobs", url = "/jobs" } = props;
    return (
      <p className={classNames(styles.sectionCallToAction, "mt-4 text-center")}>
        <Link href={url}>{title}</Link>
      </p>
    );
  }