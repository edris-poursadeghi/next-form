"use client";

import React from "react";
import { useFormContext } from "react-hook-form";

const EmailComponent = () => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input id="email" {...register("email")} />
    </div>
  );
};

export default EmailComponent;
