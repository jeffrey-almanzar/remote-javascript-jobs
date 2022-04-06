import Head from "next/head";
import Image from "next/image";
import styles from "../styles/GettingHired.module.css"

function Tab() {
  return (
    <div className="container my-5">
      <ul className="nav nav-tabs">
        <li className="nav-item col-4 text-center">
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li className="nav-item col-4 text-center">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item col-4 text-center">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function GettingHired() {
  return (
    <div className={styles.container}>
      <Tab />
    </div>
    
  );
}
