"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define Yup schema
const schema = yup.object().shape({
  options: yup.array().of(
    yup.object().shape({
      value: yup.string().required("This field is required"),
    })
  ),
});

export default function DynamicForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      options: [{ value: "" }],
    },
    resolver: yupResolver(schema),
  });

  const { fields, append } = useFieldArray({
    control,
    name: "options",
  });

  const onSubmit = (data) => {
    const mergedOptions = data.options.map((option) => option.value);
    console.log({ options: mergedOptions });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-4/5  mx-8">
      {fields.map((field, index) => (
        <div key={field.id} className="flex flex-col space-y-1">
          <input
            {...register(`options.${index}.value`)}
            className="border p-2"
            placeholder={`Option ${index + 1}`}
          />
          {errors.options?.[index]?.value && (
            <span className="text-red-500">
              {errors.options[index].value.message}
            </span>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ value: "" })}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add More
      </button>
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
