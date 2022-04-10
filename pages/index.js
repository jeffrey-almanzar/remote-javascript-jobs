import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import classNames from "classnames";

import image from "../public/images/homepageHero.gif";
import standout from "../public/images/standout.png";
import competence from "../public/images/competence.png";
import negotiation from "../public/images/negotiation.png";

function Hero(props) {
  return (
    <div className={classNames(styles.hero)}>
      <div className="container py-5">
        <div className="d-flex justify-content-between">
          <div className="align-self-center">
            <p>US Based</p>
            <h1 className="mb-3">Remote JavaScript Jobs</h1>
            <p className="mb-4 lead">
              The most reliable remote JavaScript jobs on the internet.
            </p>
            <a className="btn btn-warning" href="/jobs">
              Show me the jobs
            </a>
          </div>
          <div>
            <Image src={image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mb-5">
      <Hero />
      <div className="container pt-5">
        <h2>Getting hired</h2>
        <div className="d-md-flex justify-content-between">
          <div className="col-md-3 mt-5 text-center">
            <Image height={250} width={250} src={standout} />
            <h4 className="mb-2">Standing out</h4>
            <p>
              Are you applying and not getting interviews? Assuming you don’t
              have much experience, you…
            </p>
            <p className="mt-3">
              <a href="#" className={styles.cta}>
                Learn more
              </a>
            </p>
          </div>
          <div className="col-md-3 mt-5 text-center">
            <Image height={250} width={250} src={competence} />
            <h4 className="mb-2">Demonstrating competence</h4>
            <p>
              Are you applying and not getting interviews? Assuming you don’t
              have much experience, you…
            </p>
            <p className="mt-3">
              <a href="#" className={styles.cta}>
                Learn more
              </a>
            </p>
          </div>
          <div className="col-md-3 mt-5 text-center">
            <Image height={250} width={250} src={negotiation} />
            <h4 className="mb-2">Handling offers</h4>
            <p>
              Are you applying and not getting interviews? Assuming you don’t
              have much experience, you…
            </p>
            <p className="mt-3">
              <a href="#" className={styles.cta}>
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
