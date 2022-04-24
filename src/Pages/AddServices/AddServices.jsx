import React from "react";
import { useForm } from "react-hook-form";

const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-50 mx-auto">
      <h2>PLease Add a Service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          className="mb-2"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input placeholder="Price" className="mb-2" type="number" {...register("price")} />
        
        <input
          placeholder="PhotoURL"
          className="mb-2"
          {...register("img")}
        />
        <textarea
          placeholder="Description"
          className="mb-2"
          {...register("description")}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddServices;
