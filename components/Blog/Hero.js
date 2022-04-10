import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/GettingHired.module.css";
import classNames from "classnames";

export default function Hero(props) {
  return (
    <div className={styles.hero}>
      <div className="container h-50 d-flex flex-column justify-content-center">
        <h1 className="">Some Text Here</h1>
        <p>Some text here a bit more just a bit more</p>
      </div>
    </div>
  );
}
