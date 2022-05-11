import _ from "lodash";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import slugify from "slugify";

export default function DropDown({ label, filterKey, options, onClick }) {
  const [isActive, setIsActive] = useState({});
  const router = useRouter();

  console.log({isActive})

  useEffect(() => {
    setIsActive(
      router.query[filterKey]
        ? _.find(options, (option) => option.label == router.query[filterKey])
        : {}
    );
  }, [router.query]);

  return (
    <div className="dropdown">
      <button
        className={classNames(
          "btn w-100 text-start dropdown-toggle position-relative",
          "dropdown-button",
          !_.isEmpty(isActive) ? "btn-warning" : "dropdown-filter"
        )}
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {_.isEmpty(isActive) ? label : isActive.label}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {_.map(options, ({ value, label }) => (
          <li key={label}>
            <span
              className="dropdown-item"
              onClick={
                onClick
                  ? () => onClick({ [filterKey]: value })
                  : () => {
                      const updatedQuery = value
                        ? _.assign({}, router.query, {
                            [filterKey]: slugify(label),
                          })
                        : _.omit(router.query, [filterKey]);

                      router.push({
                        pathname: "/jobs",
                        query: updatedQuery,
                      });
                    }
              }
            >
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
