"use client";

import React from "react";
import { useFormContext } from "react-hook-form";

const NameComponent = () => {
  const { register, getValues } = useFormContext();

  const age = getValues("age");

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input id="name" {...register("name")} />
      <p>Age: {age}</p>
    </div>
  );
};

export default NameComponent;
