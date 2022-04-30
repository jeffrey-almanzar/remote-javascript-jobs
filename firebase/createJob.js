import _ from "lodash";
import moment from 'moment';

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

import firebaseApp from "./clientApp";
import uploadFile from "./uploadFile";

export default async function createJob(payload) {
  const logoUrl = await uploadFile(_.get(payload, "logo_file"));
  const db = getFirestore(firebaseApp);
  const body = _.omit({ ...payload, logo_url: logoUrl, date: moment.utc().format(), }, ["logo_file"]);
  return addDoc(collection(db, "jobs"), body);
}
