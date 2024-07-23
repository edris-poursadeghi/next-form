"use client";

// components/WizardForm.js
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Step2 = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <label>
        Email:
        <input {...register("email", { required: "Email is required" })} />
        {errors.email && <p>{errors.email.message}</p>}
      </label>
      <label>
        Phone:
        <input {...register("phone", { required: "Phone is required" })} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </label>
    </div>
  );
};


export default Step2;
