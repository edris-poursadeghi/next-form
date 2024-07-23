// components/Wizard.js
"use client";

// components/WizardForm.js
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

const Step1 = ({ next }) => {
  const methods = useForm();
  const onSubmit = (data) => {
    next(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input {...methods.register("firstName", { required: true })} />
        </div>
        <button type="submit">Next</button>
      </form>
    </FormProvider>
  );
};

const Step2 = ({ next, back, prevData }) => {
  const methods = useForm({
    defaultValues: prevData,
  });

  const onSubmit = (data) => {
    next(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
          <label>Last Name</label>
          <input {...methods.register("lastName", { required: true })} />
        </div>
        <button type="button" onClick={back}>
          Back
        </button>
        <button type="submit">Next</button>
      </form>
    </FormProvider>
  );
};

const Step3 = ({ back, prevData }) => {
  const methods = useForm({
    defaultValues: prevData,
  });

  const onSubmit = (data) => {
    console.log("data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input {...methods.register("email", { required: true })} />
        </div>
        <button type="button" onClick={back}>
          Back
        </button>
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

const WizardForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const nextStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const steps = [
    <Step1 next={nextStep} />,
    <Step2 next={nextStep} back={prevStep} prevData={data} />,
    <Step3 back={prevStep} prevData={data} />,
  ];

  return <div>{steps[step - 1]}</div>;
};

export default WizardForm;
