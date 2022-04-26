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


## Stripe

Used: 
- https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe
- https://github.com/vercel/next.js/tree/canary/examples/with-stripe-typescript 
- Demo: https://nextjs-typescript-react-stripe-js.vercel.app/use-shopping-cart

Frontend:
- Next.js and SWR
- [react-stripe-js](https://github.com/stripe/react-stripe-js) for Checkout and Elements
Backend
- Next.js API routes
- [stripe-node with TypeScript](https://github.com/stripe/stripe-node#usage-with-typescript)

Process:
- Create products in https://dashboard.stripe.com/test/products?active=true
- Create endpoint to create session pages/api/checkout_sessions/cart.js
   - await stripe.checkout.sessions.create(params)
- Hit the endpoint and redirect 
   - https://github.com/Jeffrey-A/remotejavascriptjobs/pull/10/files#diff-14b25bf2c008402cc95a3af1ce510f45ce95c34a1b7f71003ceb0520cfea8d8bR128
   - https://github.com/Jeffrey-A/remotejavascriptjobs/pull/10/files#diff-14b25bf2c008402cc95a3af1ce510f45ce95c34a1b7f71003ceb0520cfea8d8bR147