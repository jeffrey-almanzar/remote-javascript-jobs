import _ from "lodash";
import HTMLParser from "../../components/HTMLParser";

import firebaseApp from '../../firebase/clientApp';

import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  writeBatch,
  where,
  query,
} from "firebase/firestore/lite";

export default function Test({ jobPost }) {
  if (_.isEmpty(jobPost)) {
    return (
      <div className="container">
        <h1>Sorry, page not found</h1>
      </div>
    );
  }

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


   // Firebase
  const db = getFirestore(firebaseApp);
  const jobsCol = collection(db, "jobs");
  const q = query(jobsCol, where('id', '==', jobId));
  const jobSnapshot = await getDocs(q);
  const jobList = jobSnapshot.docs.map(doc => doc.data());

  const job = _.first(jobList);

  return {
    props: {
      jobPost: job || null,
    }, // will be passed to the page component as props
  };
}
