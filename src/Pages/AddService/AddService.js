import { stringify } from "@firebase/util";
import React from "react";
import { ToastContainer } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (service) => {
    console.log(service);
    const url = `http://localhost:5000/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast("Service Added");
        }
      });
  };

  return (
    <div className="w-1/2 h-screen m-auto">
      <h2 className="text-center mt-20">Please Add Service</h2>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Service Name"
          className="border-1 mb-4 py-2 px-3"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          placeholder="Price"
          className="border-1 mb-4 py-2 px-3"
          type="number"
          {...register("price")}
        />
        <textarea
          placeholder="Description"
          className="border-1 mb-4 py-2 px-3"
          {...register("description")}
        />
        <input
          placeholder="Photo Url"
          className="border-1 mb-4 py-2 px-3"
          type="text"
          {...register("img")}
        />
        <input
          className="border-1 py-2 px- bg-teal-500 font-semibold text-white"
          type="submit"
          value="Add Service"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddService;
