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

function LinkListing({ title, links }) {
  return (
    <div>
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

export default function Footer() {
  return (
    <footer className="container-fluid bg-black pt-3 pb-5">
      <div className="container-lg d-flex justify-content-between">
        <div>
          <p className={classNames(styles.logo)}>
            <Link href="/">RemoteJSJobs</Link>
          </p>
          <p className="mb-4">Some text here</p>
          <SocialMediaIcons />
        </div>
        <LinkListing title="Popular jobs" links={featuredJobLinks} />
        <LinkListing title="Getting Hired" links={gettingHiredLinks} />
      </div>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </footer>
  );
}
