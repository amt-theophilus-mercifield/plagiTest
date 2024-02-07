import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { object, string } from "yup";
import { Button } from "./Button";
import { RiMailSendLine } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
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

  const handleSubmit = (values: FormValues): void => {
    console.log(values);
    // Here you can make API calls for authentication

    const res = {
      msg: "Wrong credentials",
      status: 100,
    };

    if (res.status === 200 || res.status === 201) {
      setAlertState(() => {
        return {
          show: true,
          error: false,
          msg: "Login successful",
        };
      });
    } else {
      setAlertState(() => {
        return {
          show: true,
          error: true,
          msg: "Wrong  credentials",
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

    // setAlertState()
  };

  const TogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    console.log("alertState:::", alertState);
  }, [alertState]);

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
              <h3 className={`text-2xl font-bold`}>Login</h3>
              <span className={`font`}>
                Please enter your login details below to access your account.
              </span>
              {/* </div> */}
              <div className="mt-2">
                <Field
                  as={TextField}
                  name="username"
                  label="Email or Staff ID"
                  variant="outlined"
                  fullWidth
                  error={errors.username && touched.username}
                  helperText={
                    errors.username && touched.username ? errors.username : ""
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
              <div className="mt-2">
                <Field
                  as={TextField}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password ? errors.password : ""
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
              <div className="mt-2">
                <Button type="submit" className={`w-full`}>
                  Submit
                </Button>
              </div>
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
