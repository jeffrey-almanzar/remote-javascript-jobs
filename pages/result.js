// import { NextPage } from "next";
import { useRouter } from "next/router";

// import Layout from "../components/Layout";
// import PrintObject from "../components/PrintObject";
// import Cart from "../components/Cart";
// import ClearCart from "../components/ClearCart";

import { fetchGetJSON } from "../config/api-helper";
import useSWR from "swr";

const ResultPage = () => {
  const router = useRouter();

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  );

  console.log(data)

  if (error) return <div>failed to load</div>;

  return (
    <div>
      <div className="container">
        <h1>Checkout Payment Result</h1>
        <h2>Status: {data?.payment_intent?.status ?? "loading..."}</h2>
        <h3>CheckoutSession response:</h3>
        {/* <PrintObject content={data ?? "loading..."} />
        <Cart>
          <ClearCart />
        </Cart> */}
      </div>
    </div>
  );
};

export default ResultPage;
