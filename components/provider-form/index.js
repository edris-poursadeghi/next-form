"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import NameComponent from "./NameComponent";
import EmailComponent from "./EmailComponent";
import AgeComponent from "./AgeComponent";

const ParentComponent = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NameComponent />
        <EmailComponent />
        <AgeComponent />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default ParentComponent;
