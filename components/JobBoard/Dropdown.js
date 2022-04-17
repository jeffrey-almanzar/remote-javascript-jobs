import _ from "lodash";
import { useRouter } from "next/router";
import slugify from "slugify";

export default function DropDown({ label, filterKey, options }) {
  const router = useRouter();
  return (
    <div className="dropdown">
      <button
        className="btn  w-100 text-start btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {label}
      </button>
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
