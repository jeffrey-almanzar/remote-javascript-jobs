import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/GettingHired.module.css";
import classNames from "classnames";

import Link from "next/link";

import {
  STANDING_OUT_PAGE_PATH,
  DEMONSTRATING_COMPETENCE_PAGE_PATH,
  HANDLING_OFFERS_PAGE_PATH,
} from "../../config/constants";

export default function Tab({ active }) {
  return (
    <div className="container my-5">
      <ul className="nav nav-tabs">
        <li className="nav-item col-4 text-center">
          <span
            className={classNames(
              "nav-link",
              active === STANDING_OUT_PAGE_PATH && 'active'
            )}
          >
            <Link aria-current="page" href={STANDING_OUT_PAGE_PATH}>
              Standing out
            </Link>
          </span>
        </li>
        <li className="nav-item col-4 text-center">
          <span
            className={classNames(
              "nav-link",
              active === DEMONSTRATING_COMPETENCE_PAGE_PATH && 'active'
            )}
          >
            <Link
              className="nav-link"
              href={DEMONSTRATING_COMPETENCE_PAGE_PATH}
            >
              Demonstrating competence
            </Link>
          </span>
        </li>
        <li className="nav-item col-4 text-center">
          <span
            className={classNames(
              "nav-link",
              active === HANDLING_OFFERS_PAGE_PATH && 'active'
            )}
          >
            <Link className="nav-link" href={HANDLING_OFFERS_PAGE_PATH}>
              Handling offers
            </Link>
          </span>
        </li>
      </ul>
    </div>
  );
}

Tab.defaultProps = {
  active: STANDING_OUT_PAGE_PATH,
};
