import _ from "lodash";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/GettingHired.module.css";
import classNames from "classnames";

import matter from "gray-matter";
import { marked } from "marked";

import BreadCrumbs from "../../components/Blog/BreadCrumbs";
import TableOfContent from "../../components/Blog/TableOfContent";
import RelatedArticles from "../../components/Blog/RelatedArticles";
import Meta from "../Meta";
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

function tableOfContentSelector(sectionsStr) {
  if (!sectionsStr) {
    return [];
  }
  const sections = sectionsStr.split("--");
  return _.map(sections, (section) => ({
    title: section,
    url: `#${section}`,
  }));
}

export default function BlogPost(props) {
  const {
    frontmatter: { title, date, cover_image, sections },
    slug,
    content,
    breadCrumbs = [],
  } = props;

  return (
    <>
      <Meta title={title} />

      <div className={classNames(styles.container, "blog-post")}>
        <div className="container">
          <BreadCrumbs breadCrumbs={breadCrumbs} />
        </div>
        <div className="container">
          <h1 className="mb-2">{title}</h1>
          <p className="mb-5">{date}</p>
        </div>
        <div className="container">
          <img src={cover_image} alt="" />
          <TableOfContent sections={tableOfContentSelector(sections)} />

          <div className="post-body">
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
          <RelatedArticles posts={posts} />
        </div>
      </div>
    </>
  );
}
