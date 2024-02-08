import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { object, string } from "yup";
import { Button, SecondaryButton } from "./Button";
import { RiMailSendLine } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Logo from "../../assets/plagicheck-logo.png";
import { useAtom } from "jotai";
import { errorAtom } from "./Alert";

interface FormValues {
  username: string;
  password: string;
}

const validationSchema = object().shape({
  username: string().required("Username is required"),
  password: string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export const LoginForm: React.FC = () => {
  const [alertState, setAlertState] = useAtom(errorAtom);

  const initialValues: FormValues = { username: "", password: "" };

  const [showPassword, setShowPassword] = useState(false);

  const [forgotPassword, setForgotPassword] = useState(false);

  const handleSubmit = (values: FormValues): void => {
    console.log(values);
    // API calls for authentication

    const loginRes = {
      message: "Login successful",
      status: 200,
    };

    if (loginRes.status === 200 || loginRes.status === 201) {
      setAlertState(() => {
        return {
          show: true,
          error: false,
          message: loginRes.message,
        };
      });
    } else {
      setAlertState(() => {
        return {
          show: true,
          error: true,
          message: "Wrong credentials",
        };
      });
    }

    setTimeout(() => {
      setAlertState((prev) => {
        return {
          ...prev,
          show: false,
        };
      });
    }, 2000);
  };

  const handlePasswordReset = () => {
    const passwordResetRes = {
      message: "Check your email to reset password",
      status: 200,
    };

    if (passwordResetRes.status === 200 || passwordResetRes.status === 201) {
      setAlertState({
        show: true,
        error: false,
        message: passwordResetRes.message,
      });
    } else {
      setAlertState(() => {
        return {
          show: true,
          error: true,
          message: passwordResetRes.message,
        };
      });
    }

    setTimeout(() => {
      setAlertState((prev) => {
        return {
          ...prev,
          show: false,
        };
      });
    }, 2000);
  };

  const TogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  const toggleBackToLogin = () => {
    setForgotPassword(false);
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="flex flex-col gap-4 ">
              {/* <div> */}
              <img
                src={Logo}
                alt=""
                className={`object-contain h-[50px] self-baseline`}
              />
              <h3 className={`text-2xl font-bold`}>
                {forgotPassword ? "Forgot password" : "Login"}
              </h3>
              <span className={`font`}>
                {forgotPassword
                  ? "Please enter your email to receive the reset link in your mail."
                  : "Please enter your login details below to access your account."}
              </span>
              <div>
                {forgotPassword ? (
                  // Password reset form
                  <div className="mt-2">
                    <Field
                      as={TextField}
                      name="username"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      error={errors.username && touched.username}
                      helperText={
                        errors.username && touched.username
                          ? errors.username
                          : ""
                      }
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <RiMailSendLine />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                ) : (
                  //login form
                  <div>
                    <div className="mt-2">
                      <Field
                        as={TextField}
                        name="username"
                        label="Email or Staff ID"
                        variant="outlined"
                        fullWidth
                        error={errors.username && touched.username}
                        helperText={
                          errors.username && touched.username
                            ? errors.username
                            : ""
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <RiMailSendLine />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div className="mt-7">
                      <Field
                        as={TextField}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        error={errors.password && touched.password}
                        helperText={
                          errors.password && touched.password
                            ? errors.password
                            : ""
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FaLock />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={TogglePasswordVisibility}>
                                {showPassword ? <FiEye /> : <FiEyeOff />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
              {!forgotPassword && (
                <div className="flex justify-between w-[100%]">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      style={{ width: "16px", height: "16px" }}
                    />
                    <p>Remember me</p>
                  </div>
                  <div>
                    <button
                      onClick={handleForgotPassword}
                      className="text-[14px] text-[#0267FF]"
                    >
                      Forgot password?
                    </button>
                  </div>
                </div>
              )}

              <div className="mt-2">
                {forgotPassword ? (
                  <Button
                    className={`w-full`}
                    type="button"
                    onClick={handlePasswordReset}
                  >
                    Send reset link
                  </Button>
                ) : (
                  <Button className={`w-full`} type="submit">
                    Login
                  </Button>
                )}
              </div>

              {forgotPassword && (
                <SecondaryButton onClick={toggleBackToLogin}>
                  <FaArrowLeftLong />
                  Back to Login
                </SecondaryButton>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
  min-width: 470px;
  background: #fff;
  padding: 32px;
  box-shadow: 0 1px 3px 1px #00000026;
  border-radius: 16px;
  overflow: hidden;
`;
