import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useServiceDetail from "../../Hooks/useServiceDetail";
import "./Checkout.css";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
  //   const [user, setUser] = useState({
  //     name: "Emon Morol",
  //     email: "emonmorol@gmail.com",
  //     address: "goran bazar",
  //     phone: "019333333333",
  //   });

  //   const handleAddressChange = (event) => {
  //     // console.log(event.target.value);
  //     const { address, ...rest } = user;
  //     const newAddress = event.target.value;
  //     const newUser = { address: newAddress, ...rest };
  //     console.log(newUser);
  //     setUser(newAddress);
  //   };

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      name: user.displayName,
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios.post("http://localhost:5000/order", order).then((res) => {
      const { data } = res;
      if (data.insertedId) {
        toast("Your order is booked");
        // event.target.reset;
      }
    });
  };

  return (
    <div className=" w-1/2 mx-auto py-52">
      <div className="checkout-container w-full p-10 flex justify-center flex-col border">
        <h2 className="mx-auto mb-5">
          <span className="text-center text-gray-600">
            {" "}
            This is Checkout For
          </span>{" "}
          <br />
          <span className="text-center text-gray-600">{service.name}</span>
        </h2>
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <input
            type="text"
            name="name"
            value={user?.displayName}
            placeholder="Name"
            required
            disabled
          />
          <input
            type="email"
            name="email"
            value={user?.email}
            placeholder="Email"
            required
            disabled
          />
          <input
            type="text"
            name="service"
            value={service?.name}
            placeholder="Service"
            required
            readOnly
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            autoComplete="off"
            required
          />
          <input type="number" name="phone" placeholder="Phone" required />
          <button
            className="w-full bg-gray-500 text-white py-1 rounded-full"
            type="submit"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
