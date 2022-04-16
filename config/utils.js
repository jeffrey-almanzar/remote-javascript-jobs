import fs from "fs";
import path from "path";

export function generateBlogsStaticPaths(blogsPath) {
  const files = fs.readdirSync(path.join(blogsPath));

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
