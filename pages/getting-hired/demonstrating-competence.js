import fs from "fs";
import path from "path";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/GettingHired.module.css";
import classNames from "classnames";
import matter from "gray-matter";

import Tab from "../../components/Blog/Tab";
import Hero from "../../components/Blog/Hero";
import CardLister from "../../components/Blog/CardLister";

import {
  DEMONSTRATING_COMPETENCE_PAGE_PATH,
  DEMONSTRATING_COMPETENCE_POSTS_PATH,
} from "../../config/constants";

import Meta from "../../components/Meta";


export default function GettingHired({ posts }) {
  return (
    <>
    <Meta title="Demonstrating Competence" />
   
    <div className={styles.container}>
      <Hero />
      <Tab active={DEMONSTRATING_COMPETENCE_PAGE_PATH} />
      <div className="container mb-5">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit
          amet consectetur adipiscing elit ut aliquam. Porta non pulvinar neque
          laoreet suspendisse interdum consectetur libero id. Lorem mollis
          aliquam ut porttitor.{" "}
        </p>

        <div>
          <CardLister
            posts={posts}
            options={{ urlPrefix: DEMONSTRATING_COMPETENCE_PAGE_PATH }}
          />
        </div>
      </div>
    </div>
    </>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join(DEMONSTRATING_COMPETENCE_POSTS_PATH));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join(DEMONSTRATING_COMPETENCE_POSTS_PATH, filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
}
