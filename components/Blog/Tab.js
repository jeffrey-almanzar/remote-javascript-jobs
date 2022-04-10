import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/GettingHired.module.css";
import classNames from "classnames";

export default function Tab() {
    return (
      <div className="container my-5">
        <ul className="nav nav-tabs">
          <li className="nav-item col-4 text-center">
            <a className="nav-link active" aria-current="page" href="#">
              Standing out
            </a>
          </li>
          <li className="nav-item col-4 text-center">
            <a className="nav-link" href="#">
              Demonstrating competence
            </a>
          </li>
          <li className="nav-item col-4 text-center">
            <a className="nav-link" href="#">
              Handling offers
            </a>
          </li>
        </ul>
      </div>
    );
  }