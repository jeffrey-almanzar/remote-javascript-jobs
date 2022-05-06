import _ from "lodash";
import moment from 'moment';
import slugify from "slugify";

import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  writeBatch,
  updateDoc,
  where,
  query,
} from "firebase/firestore/lite";

import firebaseApp from "./clientApp";
import uploadFile from "./uploadFile";

export default async function createJob(payload) {
  const logoUrl = await uploadFile(_.get(payload, "logo_file"));
  const db = getFirestore(firebaseApp);
  const body = _.omit({ ...payload, logo_url: logoUrl, date: moment.utc().format(), }, ["logo_file"]);
  const jobRef = await addDoc(collection(db, "jobs"), body);
  return updateDoc(jobRef, {id: jobRef.id,   url: `?job=${jobRef.id}-${slugify(payload.title)}`});
}
