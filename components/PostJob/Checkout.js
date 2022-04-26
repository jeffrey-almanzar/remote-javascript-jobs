export default function Checkout({ onSubmit, onInputChange }) {
  return (
    <div className="">
      <div id="pay" className="anchor"></div>
      <h4 className="mb-3">Payment</h4>
      <div className="row gy-3">
        <div className="col-md-6">
          <label htmlFor="cc-name" className="form-label">
            Name on card
          </label>
          <input
            onChange={onInputChange}
            type="text"
            className="form-control"
            id="cc-name"
            name="cc-name"
            placeholder=""
            required=""
          />
          <small className="text-muted">Full name as displayed on card</small>
          <div className="invalid-feedback">Name on card is required</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="cc-number" className="form-label">
            Credit card number
          </label>
          <input
            type="text"
            className="form-control"
            id="cc-number"
            name="cc-number"
            placeholder=""
            required=""
            onChange={onInputChange}
          />
          <div className="invalid-feedback">Credit card number is required</div>
        </div>

        <div className="col-md-3">
          <label htmlFor="cc-expiration" className="form-label">
            Expiration
          </label>
          <input
            type="text"
            className="form-control"
            id="cc-expiration"
            placeholder=""
            required=""
            name="cc-expiration" 
            onChange={onInputChange}
          />
          <div className="invalid-feedback">Expiration date required</div>
        </div>

        <div className="col-md-3">
          <label htmlFor="cc-cvv" className="form-label">
            CVV
          </label>
          <input
            type="text"
            className="form-control"
            id="cc-cvv"
            placeholder=""
            required=""
            name="cc-cvv" 
            onChange={onInputChange}
          />
          <div className="invalid-feedback">Security code required</div>
        </div>
        <div className="col">
          <label htmlFor="cc-expiration" className="form-label">
            Promo code
          </label>
          <div className="input-group">
            <input onChange={onInputChange} name="promo_code" type="text" className="form-control" />
            <button type="submit" className="btn btn-secondary">
              Redeem
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end my-5">
        <button type="submit" className="btn btn-primary">
          Confirm
        </button>
      </div>
    </div>
  );
}
