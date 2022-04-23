import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useServices from "../../Hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?? You want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };

  return (
    <div>
      <h2>Manage Your Services</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {services.map((service) => (
          <div
            key={service._id}
            className="flex w-3/4 justify-between m-2 mx-auto border py-2 px-4 items-center shadow"
          >
            <h4>{service.name}</h4>
            <button
              onClick={() => handleDelete(service._id)}
              className="py-1.5 px-2.5 rounded-full bg-red-300 text-red-500 text-xl"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
