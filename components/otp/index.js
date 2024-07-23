"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import OTPInput from "react-otp-input";

const Home = () => {
  const { control, handleSubmit, watch } = useForm();
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const onSubmit = (data) => {
    console.log("phone number:", data.mobile);
    setOtpSent(true);
  };

  const handleOtpChange = (otp) => {
    setOtp(otp);
  };

  const handleOtpSubmit = () => {
    console.log("OTP:", otp);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Mobile OTP Form</h1>
      {!otpSent ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Mobile Number</label>
            <Controller
              name="mobile"
              control={control}
              defaultValue=""
              //   rules={{ required: true, pattern: /^[0-9]{10}$/ }}
              render={({ field }) => <input {...field} type="text" />}
            />
          </div>
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <div>
          <h2>Enter OTP</h2>
          <Controller
            name="otp"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <OTPInput
                value={field.value}
                renderInput={(props) => (
                  <input
                    {...props}
                    type="tel"
                    inputMode="numeric"
                    className=" mx-1 h-10 w-7 rounded-sm sm:mx-3 sm:h-12 sm:w-1 lg:mx-3 lg:h-12 lg:w-16"
                  />
                )}
                inputStyle={{
                  width: "2.5rem",
                  height: "3rem",
                  //  margin: "0 0.6rem",
                  fontSize: "2rem",
                  //  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.5)",
                }}
                onChange={handleOtpChange}
                numInputs={6}
                separator={<span>-</span>}
                {...field}
              />
            )}
          />
          <button onClick={handleOtpSubmit}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default Home;
