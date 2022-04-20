import _ from "lodash";
// import fs from 'fs';
import slugify from "slugify";

// const remoteOk = fs.readFileSync('../../jobs.json', 'utf8');

// console.log(remoteOk);

export const jobs = [
  {
    id: 11234,
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Full-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: `<meta charset="utf-8" />
    <span style="color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)">We are looking for Full Stack engineers or Front-End engineers interested in learning more about back-end development to join our team of hardworking and dedicated engineers building the next set of integrated data science tools. By joining the Data and Insights organization, you’ll be a key contributor in making the systems that power our large-scale data processing, insights, and machine learning efforts more reliable. Above all, your work will change the way the world experiences music.</span>
    <br style="box-sizing: inherit; color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)" />
    <br style="box-sizing: inherit; color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)" />
    <span style="color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)">The Analytics Platform teams within Data and Insights enable discovery, analysis, and publishing of data analysis throughout Spotify. The ‘Discovery’ and ‘Analytics’ teams build tools to help data practitioners effectively leverage Spotify’s data into actionable insights.</span>
    <br style="box-sizing: inherit; color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)" />
    <br style="box-sizing: inherit; color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)" />
    <span style="color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)">Join us and help to amplify productivity, quality and innovation across Spotify</span>
    <br style="box-sizing: inherit; color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)" />
    <br style="box-sizing: inherit; color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)" />
    <strong style="box-sizing: inherit; margin: var(--artdeco-reset-base-margin-zero); padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: 14px; vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background-image: ; background-position-x: ; background-position-y: ; background-size: ; background-repeat-x: ; background-repeat-y: ; background-attachment: ; background-origin: ; background-clip: ; background-color: rgb(255, 255, 255); outline: var(--artdeco-reset-base-outline-zero); font-weight: var(--artdeco-reset-typography-font-weight-bold); color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"><u style="box-sizing: inherit">What You'll Do<br style="box-sizing: inherit" />
    </u></strong>
    <ul style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding-top: ; padding-right: ; padding-bottom: ; padding-left: 18px; border: var(--artdeco-reset-base-border-zero); font-size: 14px; vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background-image: ; background-position-x: ; background-position-y: ; background-size: ; background-repeat-x: ; background-repeat-y: ; background-attachment: ; background-origin: ; background-clip: ; background-color: rgb(255, 255, 255); list-style-type: disc; color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif">
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">Develop Spotify’s in-house analytics platform -- a web plug-in built on Backstage that helps Data Scientists and their teams generate analysis and models from data.</li>
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">Be a valued member of an autonomous, multi-functional agile team</li>
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">Build and improve front-end features needed to spin up instances, access and process data, and collaborate with other data scientists</li>
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">Build, automate, maintain, scale, and monitor user-facing systems using standard methodologies, with reliability and scalability in mind</li>
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">Collaborate with other specialists, product managers, and designers to identify and solve exciting problems, crafting an awesome engineering experience within Spotify</li>
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">Share knowledge, promote best practices, and collaborate with teams working on teams working on groundbreaking Data Science problems.</li>
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">Work in an environment that supports your individual growth by providing you with exciting work, the freedom to acquire new skills via hack weeks, reading groups, and a variety of internal training courses.<br style="box-sizing: inherit" />
      </li>
    </ul>
    <strong style="box-sizing: inherit; margin: var(--artdeco-reset-base-margin-zero); padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: 14px; vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background-image: ; background-position-x: ; background-position-y: ; background-size: ; background-repeat-x: ; background-repeat-y: ; background-attachment: ; background-origin: ; background-clip: ; background-color: rgb(255, 255, 255); outline: var(--artdeco-reset-base-outline-zero); font-weight: var(--artdeco-reset-typography-font-weight-bold); color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"><u style="box-sizing: inherit">Who You Are<br style="box-sizing: inherit" />
    </u></strong>
    <ul style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding-top: ; padding-right: ; padding-bottom: ; padding-left: 18px; border: var(--artdeco-reset-base-border-zero); font-size: 14px; vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background-image: ; background-position-x: ; background-position-y: ; background-size: ; background-repeat-x: ; background-repeat-y: ; background-attachment: ; background-origin: ; background-clip: ; background-color: rgb(255, 255, 255); list-style-type: disc; color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif">
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">Experience with Typescript or JavaScript</li>
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">You are knowledgeable about data modeling, storage, access techniques</li>
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">Experience with protocols like gRPC, REST GraphQL</li>
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">You appreciate the value of engaging, usable design</li>
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">You are passionate about code quality, continuous delivery, and performance</li>
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">Experience with Python or Java nice to have</li>
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">Experience working with or contributing to Jupyter Notebooks nice to have<br style="box-sizing: inherit" />
      </li>
    </ul>
    <strong style="box-sizing: inherit; margin: var(--artdeco-reset-base-margin-zero); padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: 14px; vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background-image: ; background-position-x: ; background-position-y: ; background-size: ; background-repeat-x: ; background-repeat-y: ; background-attachment: ; background-origin: ; background-clip: ; background-color: rgb(255, 255, 255); outline: var(--artdeco-reset-base-outline-zero); font-weight: var(--artdeco-reset-typography-font-weight-bold); color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif">Where you'll be<br style="box-sizing: inherit" />
    </strong>
    <ul style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding-top: ; padding-right: ; padding-bottom: ; padding-left: 18px; border: var(--artdeco-reset-base-border-zero); font-size: 14px; vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background-image: ; background-position-x: ; background-position-y: ; background-size: ; background-repeat-x: ; background-repeat-y: ; background-attachment: ; background-origin: ; background-clip: ; background-color: rgb(255, 255, 255); list-style-type: disc; color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif">
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">We are a distributed workforce enabling our band members to find a work mode that is best for them!</li>
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">Where in the world? For this role, it can be within the Americas region in which we have a work location and is within working hours.</li>
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">Working hours? We operate within the Eastern Standard time zone for collaboration and ask that all be located in that time zone.</li>
      <li style="box-sizing: inherit; margin-top: ; margin-right: ; margin-bottom: ; margin-left: 16px; padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent)">Prefer an office to work from home instead? Not a problem! We have plenty of options for your working preferences. Find more information about our Work From Anywhere options here .<br style="box-sizing: inherit" />
      </li>
    </ul>
    <span style="color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)">Spotify is an equal opportunity employer. You are welcome at Spotify for who you are, no matter where you come from, what you look like, or what’s playing in your headphones. Our platform is for everyone, and so is our workplace. The more voices we have represented and amplified in our business, the more we will all thrive, contribute, and be forward-thinking! So bring us your personal experience, your perspectives, and your background. It’s in our differences that we will find the power to keep revolutionizing the way the world listens.</span>
    <br style="box-sizing: inherit; color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)" />
    <br style="box-sizing: inherit; color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)" />
    <span style="color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)">Spotify transformed music listening forever when we launched in 2008. Our mission is to unlock the potential of human creativity by giving a million creative artists the opportunity to live off their art and billions of fans the chance to enjoy and be passionate about these creators. Everything we do is driven by our love for music and podcasting. Today, we are the world’s most popular audio streaming subscription service with a community of more than 381 million users.</span>
    <br style="box-sizing: inherit; color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)" />
    <br style="box-sizing: inherit; color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)" />
    <u style="box-sizing: inherit; color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)"><strong style="box-sizing: inherit; margin: var(--artdeco-reset-base-margin-zero); padding: var(--artdeco-reset-base-padding-zero); border: var(--artdeco-reset-base-border-zero); font-size: var(--artdeco-reset-base-font-size-hundred-percent); vertical-align: var(--artdeco-reset-base-vertical-align-baseline); background: var(--artdeco-reset-base-background-transparent); outline: var(--artdeco-reset-base-outline-zero); font-weight: var(--artdeco-reset-typography-font-weight-bold)">Global COVID and Vaccination Disclosure<br style="box-sizing: inherit" />
    <br style="box-sizing: inherit" />
    </strong></u>
    <span style="color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)">Spotify is committed to safety and well-being of our employees, vendors and clients. We are following regional guidelines mandating vaccination and testing requirements, including those requiring vaccinations and testing for in-person roles and event attendance. For the US, we have mandated that all employees and contractors be fully vaccinated in order to work in our offices and externally with any third-parties. For all other locations, we strongly encourage our employees to get vaccinated and also follow local COVID and safety protocols.</span>
    <br style="box-sizing: inherit; color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)" />
    <br style="box-sizing: inherit; color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)" />
    <span style="color: rgba(0, 0, 0, 0.9); font-family: -apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)">This role is not eligible for hire in Colorado, USA.</span>
    `,
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    id: 11235,
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Full-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    id: 11236,
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Full-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    id: 11237,
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Internship",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    id: 11238,
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Part-time",
    development_type: "Front-end",
    experience_level: "Junior",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    id: 11238,
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Contract",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
];

export const FILTER_EMPLOYMENT_TYPE = "Employment type";
export const FILTER_DEVELOPMENT_TYPE = "Development type";
export const FILTER_EXPERIENCE_LEVEL = "Experience level";
export const FILTER_MAIN_TECHNOLOGY = "Main technology";
export const FILTER_SALARY = "Salary";

export const options = [
  {
    label: "Employment type",
    filterKey: slugify(FILTER_EMPLOYMENT_TYPE.toLowerCase(), "_"),
    options: ["Full-time", "Contract", "Part-time", "Internship"],
  },
  {
    label: "Development type",
    filterKey: slugify(FILTER_DEVELOPMENT_TYPE.toLowerCase(), "_"),
    options: ["Front-end", "Back-end", "Full-stack"],
  },
  {
    label: "Experience level",
    filterKey: slugify(FILTER_EXPERIENCE_LEVEL.toLowerCase(), "_"),
    options: ["Entry level", "Mid level", "Senior level"],
  },
  {
    label: "Main technology",
    filterKey: slugify(FILTER_MAIN_TECHNOLOGY.toLowerCase(), "_"),
    options: ["React", "Angular", "Vue", "jQuery"],
  },
  {
    label: "Salary estimate",
    filterKey: slugify(FILTER_SALARY.toLowerCase(), "_"),
    options: ["Less than 50k, annually", "50k-100k, annually", "100k-150k, annually", "150k-200k, annually", "More than 200k, annually"],
  },
];

export const VALID_JOB_FILTERS = _.reduce(
  options,
  (acc, option) => {
    return _.assign({}, acc, { [option.filterKey]: true });
  },
  {}
);
