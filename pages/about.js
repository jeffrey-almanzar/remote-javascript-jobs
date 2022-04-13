import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.css";

import visionImage from "../public/images/vision.gif";
import missionImage from "../public/images/innovation.gif";

export default function About() {
  return (
    <div className="container pt-5">
      <div>
        <div className="row justify-content-between mb-5">
          <div className="col-md-5">
            <h1 className="mb-3">Mission</h1>
            <p className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              libero enim sed faucibus turpis in eu mi bibendum.{" "}
            </p>
          </div>
          <Image src={missionImage} />
        </div>
        <div className="row justify-content-between">
          <Image src={visionImage} />
          <div className="col-md-5">
            <h1 className="mb-3">Vision</h1>
            <p className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              libero enim sed faucibus turpis in eu mi bibendum.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
