import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/GettingHired.module.css";
import classNames from "classnames";



export default function PostCard(props) {
    const { title, content, url } = props;
  
    return (
      <a href={url}>
        <div className="w-100 d-lg-flex">
          <div
            className={classNames(styles.image, "col col-lg-2 me-3 mb-3 mb-lg-0")}
          >
            Image
          </div>
          <div>
            <h3 className="mb-3">{title}</h3>
            <p>{content}</p>
          </div>
        </div>
      </a>
    );
  }