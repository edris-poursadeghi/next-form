"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";

const DynamicForm = ({ fields }) => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={index}>
          {field.input === "text" && (
            <Controller
              name={field.name}
              control={control}
              defaultValue={field.value}
              render={({ field }) => (
                <input {...field} placeholder={field.name} />
              )}
            />
          )}
          {field.input === "textarea" && (
            <Controller
              name={field.name}
              control={control}
              defaultValue={field.value}
              render={({ field }) => (
                <textarea {...field} placeholder={field.name} />
              )}
            />
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
