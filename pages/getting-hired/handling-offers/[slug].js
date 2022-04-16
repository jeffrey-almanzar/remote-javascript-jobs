import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

import { HANDLING_OFFERS_POSTS_PATH } from "../../../config/constants";
import { generateBlogsStaticPaths } from "../../../config/utils";

import BlogPost from "../../../components/Blog/BlogPost";

export default BlogPost;

export async function getStaticPaths() {
  return generateBlogsStaticPaths(HANDLING_OFFERS_POSTS_PATH);
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join(HANDLING_OFFERS_POSTS_PATH, slug + ".md"),
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
          title: "Handling Offers",
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
