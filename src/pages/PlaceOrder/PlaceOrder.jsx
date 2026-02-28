import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const subtotal = getTotalCartAmount();
  const delivery = 0;
  const total = subtotal + delivery;

  const handleSubmit = (e) => {};

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <h2>Delivery Information</h2>

        <div className="form-row">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>

        <input type="tel" placeholder="Phone Number" required />
        <input type="text" placeholder="Street / House No." required />

        <div className="form-row">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="District" required />
        </div>

        <textarea rows="3" placeholder="Delivery Note (optional)" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <hr />

          <div className="cart-total-details">
            <b>Total</b>
            <p>฿{total}</p>
          </div>

          <button type="submit">
            PLACE ORDER
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;