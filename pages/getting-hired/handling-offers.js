import fs from "fs";
import path from "path";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/GettingHired.module.css";
import classNames from "classnames";
import matter from "gray-matter";

import PostCard from "../../components/Blog/PostCard";
import Tab from "../../components/Blog/Tab";
import Hero from "../../components/Blog/Hero";

import {
  HANDLING_OFFERS_PAGE_PATH,
  HANDLING_OFFERS_POSTS_PATH,
} from "../../config/constants";

import CardLister from "../../components/Blog/CardLister";

import Link from "next/link";
import Meta from "../../components/Meta";

export default function GettingHired({ posts }) {
  return (
    <>
      <Meta title="Handling Offers" />

      <div className={styles.container}>
        <Hero />
        <Tab active={HANDLING_OFFERS_PAGE_PATH} />
        <div className="container mb-5">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.{" "}
          </p>

          <div>
            <CardLister
              posts={posts}
              options={{ urlPrefix: HANDLING_OFFERS_PAGE_PATH }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join(HANDLING_OFFERS_POSTS_PATH));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join(HANDLING_OFFERS_POSTS_PATH, filename),
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
