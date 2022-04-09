import Head from "next/head";
import Image from "next/image";
import styles from "../styles/GettingHired.module.css";
import classNames from "classnames";

function Tab() {
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

const posts = [
  {
    title: "How to create a solid software developer portfolio",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet
        consectetur adipiscing elit ut aliquam. Porta non pulvinar neque laoreet
        suspendisse interdum consectetur libero …….`,
  },
  {
    title: "How to create a solid software developer portfolio",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet
        consectetur adipiscing elit ut aliquam. Porta non pulvinar neque laoreet
        suspendisse interdum consectetur libero …….`,
  },
  {
    title: "How to create a solid software developer portfolio",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet
        consectetur adipiscing elit ut aliquam. Porta non pulvinar neque laoreet
        suspendisse interdum consectetur libero …….`,
  },
  {
    title: "How to create a solid software developer portfolio",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet
        consectetur adipiscing elit ut aliquam. Porta non pulvinar neque laoreet
        suspendisse interdum consectetur libero …….`,
  },
  {
    title: "How to create a solid software developer portfolio",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet
        consectetur adipiscing elit ut aliquam. Porta non pulvinar neque laoreet
        suspendisse interdum consectetur libero …….`,
  },
];

function Card(props) {
  const { title, content } = props;

  return (
    <div className="w-100 d-lg-flex">
      <div
        className={classNames(styles.image, "col col-lg-2 me-3 mb-3 mb-lg-0")}
      >
        Image
      </div>
      <div>
        <h3 className="mb-3">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default function GettingHired() {
  return (
    <div className={styles.container}>
      <Tab />
      <div className="container mb-5">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit
          amet consectetur adipiscing elit ut aliquam. Porta non pulvinar neque
          laoreet suspendisse interdum consectetur libero id. Lorem mollis
          aliquam ut porttitor.{" "}
        </p>

        <div>
          {posts.map((post, index) => (
            <div key={post.title + index} className="mb-5">
              <Card {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
