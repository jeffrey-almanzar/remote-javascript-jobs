const fs = require("fs");
const _ = require("lodash");
const moment = require('moment');

const sampleJobs = fs.readFileSync("./public/jobs.json", "utf8");
const jobs = JSON.parse(sampleJobs);

export const transformedJobs = _.compact(
  _.map(jobs, (job) => {
    if (!job.id) {
      return null;
    }

    const now = moment();
    const jobDate = moment(job.date);
    const timeDiffInWeeks = now.diff(jobDate, 'weeks');
    const timeDiffInDays = now.diff(jobDate, 'days');

    const displayDate = timeDiffInWeeks > 0 ? `${timeDiffInWeeks}w` : `${timeDiffInDays}d`;

    return {
      id: job.id,
      title: job.position,
      company_name: job.company,
      date: displayDate,
      employment_type: "Full-time",
      development_type: "Front-end",
      experience_level: "Mid level",
      salary: "$80k-$100k",
      technologies: job.tags,
      description: job.description,
      apply_link: job.apply_url,
      logo_url: job.logo,
      company_site: "https://example.com",
    };
  })
);
