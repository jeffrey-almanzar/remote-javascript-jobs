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

import { DEMONSTRATING_COMPETENCE_PAGE_PATH } from "../../config/constants";

import Link from 'next/link'

export function Post({ post }) {
  return (
    <div className='card'>
      <img src={post.frontmatter.cover_image} alt='' />

      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/getting_hired/${post.slug}`}>
        <a className='btn'>Read More</a>
      </Link>
    </div>
  )
}

export default function GettingHired({ posts }) {
  return (
    <div className={styles.container}>
      <Hero />
      <Tab active={DEMONSTRATING_COMPETENCE_PAGE_PATH} />
      {/* <div className="container mb-5">
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
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </div> */}

      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts/getting_hired"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts/getting_hired", filename),
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
