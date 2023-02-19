const fs = require("fs");
const _ = require("lodash");
const moment = require('moment');

const sampleJobs = fs.readFileSync("./public/jobs.json", "utf8");
const jobs = JSON.parse(sampleJobs);

const transformedJobs = _.compact(
  _.map(jobs, (job, index) => {
    if (!job.id) {
      return null;
    }

    const now = moment();
    const jobDate = moment(job.date);
    const timeDiffInWeeks = now.diff(jobDate, 'weeks');
    const timeDiffInDays = now.diff(jobDate, 'days');

    const displayDate = timeDiffInWeeks > 0 ? `${timeDiffInWeeks}w` : `${timeDiffInDays}d`;

    const mainTechnologies = ['React', 'Vue', 'Angular', 'jQuery', 'Node', 'Next'];
    const salaries = ['$50k-100k', '$100k-150k', '$150k-200k', '$200k+' ];
    const mainTechnology = mainTechnologies[Math.floor(Math.random() * mainTechnologies.length)];

    const developmentTypeMap = {
      React: 'Front-end',
      Vue: 'Front-end',
      Angular: 'Front-end',
      jQuery: 'Front-end',
      Node: 'Back-end',
      Next: 'Full-stack',
    }
  
    const otherTechnologies = _.slice(job.tags, 1);

    return {
      id: job.id,
      title: job.position,
      date: job.date ? moment(job.date).format('MM/DD/YYYY') : job.date,
      employment_type: "Full-time",
      development_type: developmentTypeMap[mainTechnology],
      experience_level: "Mid level",
      salary: salaries[Math.floor(Math.random() * salaries.length)],
      // min_salary: '80',
      // max_salary: '100',
      main_technology: mainTechnology || null,
      other_technologies: otherTechnologies,
      description: job.description,
      apply_link: job.apply_url,
      is_open_worldwide: true, // Selecting 'Yes' means your future hire can work anywhere in the world without any location or time zone restrictions!
      // company info
      company_name: job.company,
      logo_url: job.logo,
      company_site: "https://example.com",
      company_email: 'test@gamil.com', // stays private - for inbox 

      // highlight info
      is_featured: index === 1,
    };
  })
);

module.exports = transformedJobs;