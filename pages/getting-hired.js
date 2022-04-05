import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function Tab() {
  return (
    <div className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item col-4 text-center">
          <a className="nav-link active bg-yellow" aria-current="page" href="#">
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
    <Tab />
  );
}
