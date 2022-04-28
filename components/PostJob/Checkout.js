import { FEATURED_JOB_PRICE, STANDARD_JOB_PRICE } from '../../config/constants';

export default function Checkout({ onSubmit, onInputChange, isFeaturedPosting }) {
  const total = isFeaturedPosting ? FEATURED_JOB_PRICE : STANDARD_JOB_PRICE;

  return (
    <div className="">
      <div id="pay" className="anchor"></div>
      <h2 className="pb-4">3. Order Summary</h2>
      <div className="row gy-3">
        <p className="d-flex justify-content-between">
          <span>Featured Job</span>
          <span>{total}</span>
        </p>
        <p className="d-flex justify-content-between">
          <span>Taxes</span>
          <span>$0</span>
        </p>
        <p className="d-flex justify-content-between u-bold">
          <span>Total</span>
          <span>{total}</span>
        </p>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button type="submit" className="btn btn-primary mainCta py-2">
          Find the right talent
        </button>
      </div>
    </div>
  );
}
