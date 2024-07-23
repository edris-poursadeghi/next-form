"use client";

// components/WizardForm.js
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const Step1 = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <label>
        First Name:
        <input
          {...register("firstName", { required: "First name is required" })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </label>
      <label>
        Last Name:
        <input
          {...register("lastName", { required: "Last name is required" })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </label>
    </div>
  );
};

export default Step1;
