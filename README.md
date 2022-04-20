## Remote JavaScript Jobs

US Based Remote Javascript Job Board:
- Developers can find reliable jobs

- Developers can learn about javascript interview questions and job hunting topics

- Companies can post job ads for a priceUS 



## Firebase

### Delete many records

```
const db = getFirestore(firebaseApp);
const batch = writeBatch(db);

const jobsCol = collection(db, "jobs");
const jobSnapshot = await getDocs(jobsCol);
jobSnapshot.forEach((doc) => {
  batch.delete(doc.ref);
});

await batch.commit();
```
### Create many records

```
const db = getFirestore(firebaseApp);
const batch = writeBatch(db);

transformedJobs.forEach((job) => {
  batch.set(doc(db, 'jobs', job.id), job);
});

await batch.commit();
```

## Get all jobs

```
const db = getFirestore(firebaseApp);
const jobsCol = collection(db, "jobs");
const jobSnapshot = await getDocs(jobsCol);
const jobList = jobSnapshot.docs.map(doc => doc.data());
console.log(jobList)
```

## Queries

https://cloud.google.com/firestore/docs/query-data/queries