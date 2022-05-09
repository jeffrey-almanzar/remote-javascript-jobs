import { useRouter } from "next/router";
import classNames from "classnames";
import DropDown from "./Dropdown";

import styles from "../../styles/JobBoard.module.css";

export default function Filters({ options }) {
  const router = useRouter();
  return (
    <div className={classNames(styles.filters, "p-4 sticky-top")}>
      <h3 className="mb-3">Filters</h3>
      <ul>
        {options.map((option) => (
          <li key={option} className="mb-2">
            <DropDown {...option} />
          </li>
        ))}
      </ul>
      <p
        onClick={() => router.push({ pathname: "/" })}
        className="btn btn-link"
      >
        Reset filters
      </p>
    </div>
  );
}
