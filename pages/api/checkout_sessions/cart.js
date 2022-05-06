import _ from 'lodash';
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2020-08-27",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const params = {
        submit_type: "pay",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_address_collection: {
          allowed_countries: ["US", "CA"], // should i allow more countries? Maybe only USA
        },
        customer_email: _.get(req.body, 'customer_email'),
        line_items: [_.pick(req.body, ['price', 'quantity'])],
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/job-posting`,
        mode: "payment",
      };

      const checkoutSession = await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (err) {
      console.log(err);
      const errorMessage =
        err instanceof Error ? err.message : "Internal server error";
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
