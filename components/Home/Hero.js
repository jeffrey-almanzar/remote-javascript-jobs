import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import _ from "lodash";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import { JOBS_PAGE_PATH } from "../../config/constants";

import image from "../../public/images/homepageHero.gif";

import styles from "../../styles/Home.module.css";

import particlesOptions from "./particlesOptions";

export default function Hero(props) {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="hero-wrapper position-relative">
      <div>
        <Particles
          className="particle-canvas"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
        />
      </div>
      <div className={styles.test}></div>
      <div className={classNames(styles.hero)}>
        <div className={classNames("container py-5")}>
          <div className="d-flex justify-content-between">
            <div className="align-self-center">
              <p>US Based</p>
              <h1 className="mb-3">Remote JavaScript Jobs</h1>
              <p className="mb-4 lead">
                The most reliable remote JavaScript jobs on the internet.
              </p>
              <p className="btn btn-primary">
                <Link href={JOBS_PAGE_PATH}>Show me the jobs</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
