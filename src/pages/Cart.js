import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import "./style.css";

const Cart = () => {
  const productData = useSelector((state) => state.mart.productData);
  const userInfo = useSelector((state) => state.mart.userInfo);
  const [totalAmt, setTotalaAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    let roundedPrice = price.toFixed(2);
    setTotalaAmt(roundedPrice);
  }, [productData]);
  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to check out");
    }
  };
  return (
    <>
      {productData != 0 ? (
        <div>
          <img
            className="w-full h-60 object-cover"
            src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress"
            alt="cartImg0"
          />
          <div className="max-w-screen-xl mx-auto py-20 flex" id="parent-div">
            <CartItem />
            <div className="w-full md:w-1/3 bg-[#fafafa] py-6 px-4">
  <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
    <h2 className="text-2xl font-medium">Cart Totals</h2>
    <p className="flex items-center gap-4 text-base">
      Subtotal
      <span className="font-titleFont font-extrabold text-lg">${totalAmt}</span>
    </p>
    <p className="flex items-start gap-4 text-lg">
      Shipping
      <span>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quos, veritatis
      </span>
    </p>
  </div>
  <p className="font-titleFont font-semibold flex justify-between mt-6">
    Total <span className="text-xl font-extrabold">${totalAmt}</span>
  </p>
  <div onClick={handleCheckout}>
    <button className="text-xl bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
      Proceed to Checkout
    </button>
    {payNow && (
      <div className="w-full mt-6 flex items-center justify-center">
        <StripeCheckout
          stripeKey="pk_test_51NQp3hJMdlremo6lC8onXipZy7S7CpolhWwL7aQzabTiKmW4jAdJ7TdFaFQ2U91cFOC355gbp7s3zC0TpN6oxV2A002Fo5Vib2"
          name="Mart Online Shopping"
          amount={totalAmt * 100}
          label="Pay to Mart"
          description={`Your Payment amount is $${totalAmt}`}
          email={userInfo.email}
        />
      </div>
    )}
  </div>
</div>

          </div>
        </div>
      ) : (
        <div>
          <img
            className="w-full h-60 object-cover"
            src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress"
            alt="cartImg0"
          />
          <div className="flex flex-col items-center mt-12 mb-12">
            <p className="text-red-500 font-semibold text-lg">
              Your Cart is Emty. Please go back to Shopping an add product to
              Cart.
            </p>
            <Link to={"/"}>
              <button className="mt-1 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
                <span>
                  <HiOutlineArrowLeft />
                </span>
                go shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
