import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

import classNames from "classnames";

const socialMediaIcons = [
  "icon-facebook",
  "icon-instagram",
  "icon-linkedin",
  "icon-twitter",
];

const gettingHiredLinks = [
  {
    url: "https://example.com",
    text: "Standing out",
  },
  {
    url: "https://example.com",
    text: "Demonstrating competence",
  },
  {
    url: "https://example.com",
    text: "Dealing with offers",
  },
];

const featuredJobLinks = [
  {
    url: "https://example.com",
    text: "React jobs",
  },
  {
    url: "https://example.com",
    text: "Angular jobs",
  },
  {
    url: "https://example.com",
    text: "Vue jobs",
  },
];

function LinkListing({ title, links, className }) {
  return (
    <div className={classNames(className)}>
      <h4 className="mb-3">{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={link.url}>
            <Link href={link.text}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialMediaIcons() {
  return (
    <ul className="d-flex">
      {socialMediaIcons.map((iconClass) => (
        <li key={iconClass} className={styles.socialMediaIcon}>
          <Link href="/">
            <span className={iconClass}></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const accordions = [
  {
    title: "Test",
    Content: () => <div>Test Content</div>,
  },
  {
    title: "Test 2",
    Content: () => <div>Test Content 2</div>,
  },
  {
    title: "Test 3",
    Content: () => <div>Test Content 3</div>,
  },
  {
    title: "Test 4",
    Content: () => <div>Test Content 4</div>,
  },
];

function Accordion({ accordions }) {
  return (
    <div className="accordion" id="accordionExample">
      {accordions.map((accordion, index) => {
        const { title, Content } = accordion;
        const accordionKey = title.replace(' ', '') + index;
        return (
          <div key={title + "-" + index} className="accordion-item">
            <h2 className="accordion-header" id={accordionKey}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapseOne" + accordionKey}
                aria-expanded="false"
                aria-controls={"collapseOne" + accordionKey}
              >
                {title}
              </button>
            </h2>
            <div
              id={"collapseOne" + accordionKey}
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body color-white bg-black">
                <Content />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer container-fluid bg-black pt-3 mt-auto pb-5">
      <div className="container-lg d-md-flex justify-content-between">
        <div>
          <p className={classNames(styles.logo)}>
            <Link href="/">RemoteJSJobs</Link>
          </p>
          <p className="mb-4">Some text here</p>
          <SocialMediaIcons />
          <div className="d-md-none mt-4">
          <Accordion accordions={accordions} />
          </div>
        </div>
        <LinkListing className="d-none d-md-block" title="Popular jobs" links={featuredJobLinks} />
        <LinkListing className="d-none d-md-block" title="Getting Hired" links={gettingHiredLinks} />
      </div>
    </footer>
  );
}
