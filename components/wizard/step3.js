// components/WizardForm.js
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Step3 = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <label>
        Address:
        <input {...register("address", { required: "Address is required" })} />
        {errors.address && <p>{errors.address.message}</p>}
      </label>
      <label>
        City:
        <input {...register("city", { required: "City is required" })} />
        {errors.city && <p>{errors.city.message}</p>}
      </label>
    </div>
  );
};

export default Step3;
