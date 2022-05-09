const fs = require("fs");
const _ = require("lodash");
const moment = require('moment');

const sampleJobs = fs.readFileSync("./public/jobs.json", "utf8");
const jobs = JSON.parse(sampleJobs);

const transformedJobs = _.compact(
  _.map(jobs, (job) => {
    if (!job.id) {
      return null;
    }

    const now = moment();
    const jobDate = moment(job.date);
    const timeDiffInWeeks = now.diff(jobDate, 'weeks');
    const timeDiffInDays = now.diff(jobDate, 'days');

    const displayDate = timeDiffInWeeks > 0 ? `${timeDiffInWeeks}w` : `${timeDiffInDays}d`;

    const mainTechnology = _.first(job.tags || []);
    const otherTechnologies = _.slice(job.tags, 1);

    return {
      id: job.id,
      title: job.position,
      date: moment(job.date).format(),
      employment_type: "Full-time",
      development_type: "Front-end",
      experience_level: "Mid level",
      // salary,
      main_technology: mainTechnology || '',
      other_technologies: otherTechnologies,
      description: job.description,
      apply_link: job.apply_url,
      is_open_worldwide: job.location == 'Worldwide', // Selecting 'Yes' means your future hire can work anywhere in the world without any location or time zone restrictions!
      // company info
      company_name: job.company,
      logo_url: job.logo,
      company_site: "https://example.com",
      company_email: 'test@gamil.com', // stays private - for inbox 

      // highlight info
      is_featured: job.is_featured || false,
    };
  })
);


// const db = getFirestore(firebaseApp);
// const batch = writeBatch(db);

// transformedJobs.forEach((job) => {
//   batch.set(doc(db, 'jobs', job.id), job);
// });

// batch.commit()

// async function Test() {
//   const jobsCol = collection(db, "jobs");
//   const jobSnapshot = await getDocs(jobsCol);
//   const jobList = jobSnapshot.docs.map(doc => doc.data());
//   console.log(jobList)
// }
// Test()

// fs.writeFileSync('test.json', JSON.stringify(transformedJobs));

module.exports = transformedJobs;