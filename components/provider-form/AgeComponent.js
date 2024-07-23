"use client";
import React from 'react';
import { useFormContext } from 'react-hook-form';

const AgeComponent = () => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor="age">Age:</label>
      <input id="age" type="number" {...register('age')} />
    </div>
  );
};

export default AgeComponent;