import _ from 'lodash';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import { JOBS_PAGE_PATH } from "../../config/constants";

import image from "../../public/images/homepageHero.gif";

import styles from "../../styles/Home.module.css";

export default function Hero(props) {
    return (
      <>  
        <div className={classNames(styles.hero)}>
          <div className="container py-5">
            <div className="d-flex justify-content-between">
              <div className="align-self-center">
                <p>US Based</p>
                <h1 className="mb-3">Remote JavaScript Jobs</h1>
                <p className="mb-4 lead">
                  The most reliable remote JavaScript jobs on the internet.
                </p>
                <p className="btn btn-warning">
                  <Link href={JOBS_PAGE_PATH}>Show me the jobs</Link>
                </p>
              </div>
              {/* <div>
                <Image src={image} />
              </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }