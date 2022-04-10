import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/GettingHired.module.css";
import classNames from "classnames";
import PostCard from "./PostCard";

export default function RelatedArticles({ posts }) {
    return (
        <div>
          <h3 className="mb-4">Related Articles</h3>
          {posts.map((post, index) => (
            <div key={post.title + index} className="mb-5">
              <PostCard {...post} />
            </div>
          ))}
        </div>
    );
}