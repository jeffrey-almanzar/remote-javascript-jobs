import _ from 'lodash';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import standout from "../../public/images/standout.png";
import competence from "../../public/images/competence.png";
import negotiation from "../../public/images/negotiation.png";

import styles from "../../styles/Home.module.css";



export default function GettingHiredSection(props) {
    return (
      <div className="container py-5">
        <h2>Getting hired</h2>
        <div className="d-md-flex justify-content-between">
          <div className="col-md-3 mt-5 text-center">
            <Image height={250} width={250} src={standout} />
            <h4 className="mb-2">Standing out</h4>
            <p>
              Are you applying and not getting interviews? Assuming you don’t have
              much experience, you…
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
              Are you applying and not getting interviews? Assuming you don’t have
              much experience, you…
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
              Are you applying and not getting interviews? Assuming you don’t have
              much experience, you…
            </p>
            <p className="mt-3">
              <a href="#" className={styles.cta}>
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }