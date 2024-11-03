import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { Formik, Form, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";

import { useAuth } from "../context/AuthContext";

const Login = ({ isSignUp }) => {
  console.log(isSignUp);

  const { registerUser, loginUser, signInWithGoogle } = useAuth();

  const navigate = useNavigate();

  const loginSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password should be at least 6 characters")
      .required("Password is required"),
    // If it's sign-up mode, we add confirm password validation
    confirmPassword: isSignUp
      ? Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required")
      : null,
  });

  // useFormik hook for form state and handling
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "", // Only used in sign-up
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log("Login Info", values);
      // You can handle form submission here

      if (isSignUp) {
        await registerUser(values.email, values.password);
        alert("Login successful!");
        navigate("/");
      }
      await loginUser(values.email, values.password);
      alert("Login successful!");
      navigate("/");
    },
  });

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
    navigate("/");
  };

  return (
    <FormikProvider value={formik}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Full viewport height
          margin: 0,
        }}
      >
        <Form>
          <Card sx={{ maxWidth: 400, p: 2 }}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                align="center"
              >
                {isSignUp ? "Sign Up" : "Login"}
              </Typography>
              <TextField
                label="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                margin="normal"
                fullWidth
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                margin="normal"
                fullWidth
              />
              {/* Conditionally render confirm password field for sign-up */}
              {isSignUp && (
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                  margin="normal"
                  fullWidth
                />
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                {isSignUp ? "Sign Up" : "Login"}
              </Button>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => handleSignInWithGoogle()}
              >
                Sign Up with Google
              </Button>
              {/* Added Sign Up link */}
              {!isSignUp && (
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                  Don't have an account?{" "}
                  <a
                    href="/signup"
                    style={{ textDecoration: "none", color: "#1976d2" }}
                  >
                    Sign up
                  </a>
                </Typography>
              )}
            </CardContent>
          </Card>
        </Form>
      </Box>
    </FormikProvider>
  );
};

export default Login;
