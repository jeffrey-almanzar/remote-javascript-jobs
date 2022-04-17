import _ from "lodash";
import { jobs } from "../../components/JobBoard/data";
import HTMLParser from "../../components/HTMLParser";

export default function Test({ jobPost }) {
  const {
    title,
    company_name,
    date,
    employment_type,
    development_type,
    experience_level,
    salary,
    technologies,
    description,
    apply_link,
    logo_url,
    company_site,
  } = jobPost;

  if (_.isEmpty(jobPost)) {
    return (
      <div className="container">
        <h1>Sorry, page not found</h1>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="pb-4">{title}</h1>
      <div>
        <HTMLParser>{description}</HTMLParser>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const jobId = _.get(context, "query.slug").split("-")[0];
  // const { query } = context;
  // const hasFilters = !_.isEmpty(query);

  // const filteredJobs = [];
  console.log(jobId);
  const job = jobs.find((job) => job.id == jobId);

  return {
    props: {
      jobPost: job || null,
    }, // will be passed to the page component as props
  };
}
