import Head from "next/head";
import Image from "next/image";
import styles from "../styles/GettingHired.module.css";
import classNames from "classnames";

import BreadCrumbs from "../components/Blog/BreadCrumbs";
import TableOfContent from "../components/Blog/TableOfContent";
import RelatedArticles from "../components/Blog/RelatedArticles";

const breadCrumbs = [
  {
    title: "Parent",
    url: "/getting-hired",
  },
  {
    title: "How to create a solid software developer portfolio",
    url: "/test-post",
  },
];

const posts = [
  {
    title: "How to create a solid software developer portfolio",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet
          consectetur adipiscing elit ut aliquam. Porta non pulvinar neque laoreet
          suspendisse interdum consectetur libero …….`,
    url: "/test-post",
  },
  {
    title: "How to create a solid software developer portfolio",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet
          consectetur adipiscing elit ut aliquam. Porta non pulvinar neque laoreet
          suspendisse interdum consectetur libero …….`,
    url: "/test-post",
  },
];

export default function Post(props) {
  const {
    title = "How to create a solid software developer portfolio",
    date = "May 18, 2020",
  } = props;

  return (
    <div className={styles.container}>
      <div className="container">
        <BreadCrumbs breadCrumbs={breadCrumbs} />
      </div>
      <div className="container">
        <h1 className="mb-2">{title}</h1>
        <p className="mb-5">{date}</p>
      </div>
      <div className="container">
        <TableOfContent />

        <div className="mb-5">
          <h3 className="mb-3">Test 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="mb-3">Test 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="mb-3">Test 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="mb-3">Test 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.
          </p>
        </div>
        <RelatedArticles posts={posts} />
      </div>
    </div>
  );
}
