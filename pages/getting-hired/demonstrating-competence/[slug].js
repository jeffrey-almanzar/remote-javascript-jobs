import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

import { DEMONSTRATING_COMPETENCE_POSTS_PATH } from "../../../config/constants";

import BlogPost from "../../../components/Blog/BlogPost";

export default BlogPost;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(DEMONSTRATING_COMPETENCE_POSTS_PATH));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join(DEMONSTRATING_COMPETENCE_POSTS_PATH, slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
      breadCrumbs: [
        {
          title: "Home",
          url: "/",
        },
        {
          title: "Getting Hired",
          url: "/getting-hired",
        },
        {
          title: "Demonstrating Competence",
          url: "/getting-hired",
        },
        {
          title: frontmatter.title,
          url: "",
        },
      ],
    },
  };
}
