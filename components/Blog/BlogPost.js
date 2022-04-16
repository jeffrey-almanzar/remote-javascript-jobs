import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/GettingHired.module.css";
import classNames from "classnames";

// import fs from "fs";
// import path from "path";

import matter from "gray-matter";
import { marked } from "marked";

import BreadCrumbs from "../../components/Blog/BreadCrumbs";
import TableOfContent from "../../components/Blog/TableOfContent";
import RelatedArticles from "../../components/Blog/RelatedArticles";

// const breadCrumbs = [
//   {
//     title: "Parent",
//     url: "/getting-hired",
//   },
//   {
//     title: "How to create a solid software developer portfolio",
//     url: "/test-post",
//   },
// ];

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

export default function BlogPost(props) {
  const {
    frontmatter: { title, date, cover_image },
    slug,
    content,
    breadCrumbs = [],
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
        <img src={cover_image} alt="" />
        <TableOfContent />

        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
        <RelatedArticles posts={posts} />
      </div>
    </div>
  );
}
