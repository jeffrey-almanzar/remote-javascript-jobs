import Head from "next/head";
import Image from "next/image";
import styles from "../styles/GettingHired.module.css";
import classNames from "classnames";

import PostCard from "../components/Blog/PostCard";
import Tab from "../components/Blog/Tab";
import Hero from "../components/Blog/Hero";

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
  {
    title: "How to create a solid software developer portfolio",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet
        consectetur adipiscing elit ut aliquam. Porta non pulvinar neque laoreet
        suspendisse interdum consectetur libero …….`,
    url: "/test-post",
  },
];


export default function GettingHired() {
  return (
    <div className={styles.container}>
      <Hero />
      <Tab />
      <div className="container mb-5">
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
      </div>
    </div>
  );
}
