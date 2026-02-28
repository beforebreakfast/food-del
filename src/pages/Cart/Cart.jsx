import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const cartEntries = Object.entries(cartItems);

  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Options</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {cartEntries.length === 0 && (
          <p style={{ marginTop: "20px" }}>Your cart is empty.</p>
        )}

        {cartEntries.map(([cartKey, cartData]) => {
          const item = food_list.find(
            (food) => food._id === cartData.itemId
          );

          if (!item) return null;

          // คำนวณราคา option เพิ่ม
          let extraPrice = 0;
          Object.values(cartData.selectedOptions || {}).forEach((opt) => {
            if (typeof opt === "object" && opt.price) {
              extraPrice += opt.price;
            }
          });

          const finalPrice = item.price + extraPrice;
          const lineTotal = finalPrice * cartData.quantity;

          return (
            <div key={cartKey}>
              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt={item.name} width="60" />

                <p>{item.name}</p>

                <p>
                  {Object.entries(cartData.selectedOptions || {}).map(
                    ([key, value]) => (
                      <div key={key}>
                        {key} :{" "}
                        {typeof value === "string"
                          ? value
                          : value.label}
                      </div>
                    )
                  )}
                </p>

                <p>฿{finalPrice}</p>
                <p>{cartData.quantity}</p>
                <p>฿{lineTotal}</p>

                <p
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => removeFromCart(cartKey)}
                >
                  x
                </p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <hr />

          <div className="cart-total-details">
            <b>Total</b>
            <p>฿{getTotalCartAmount()}</p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/order")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;