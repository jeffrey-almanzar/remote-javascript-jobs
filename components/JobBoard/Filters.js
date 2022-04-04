import classNames from "classnames";
import DropDown from "./Dropdown";

import styles from "../../styles/JobBoard.module.css";

import { options } from "./data";

export default function Filters() {
  return (
    <div className={classNames(styles.filters, "p-4 sticky-top")}>
      <h3 className="mb-3">Filters</h3>
      <ul>
        {options.map((option) => (
          <li key={option} className="mb-2">
            <DropDown title={option} />
          </li>
        ))}
      </ul>
      <p className="btn btn-link">Reset filters</p>
    </div>
  );
}
