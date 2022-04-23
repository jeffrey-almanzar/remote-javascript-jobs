import _ from "lodash";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import slugify from "slugify";

export default function DropDown({ label, filterKey, options }) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsActive(router.query[filterKey] && true);
  }, [router.query]);

  return (
    <div className="dropdown">
      {label && (
        <button
          className={classNames(
            "btn w-100 text-start dropdown-toggle position-relative",
            isActive ? "btn-warning" : "dropdown-filter"
          )}
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {label}
        </button>
      )}
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {_.map(options, (option) => (
          <li key={option}>
            <span
              className="dropdown-item"
              onClick={() => {
                router.push({
                  pathname: "/jobs",
                  query: _.assign({}, router.query, {
                    [filterKey]: slugify(option),
                  }),
                });
              }}
            >
              {option}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
