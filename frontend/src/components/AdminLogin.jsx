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

const AdminLogin = () => {
  const { adminLogin } = useAuth();

  const navigate = useNavigate();

  const loginSchema = Yup.object({
    userName: Yup.string().required("User name is required"),
    password: Yup.string()
      .min(6, "Password should be at least 6 characters")
      .required("Password is required"),
  });

  // useFormik hook for form state and handling
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log("Login Info", values);
      // You can handle form submission here

      const auth = await adminLogin(values.userName, values.password);
      console.log(auth);
      console.log(auth?.token);

      if (auth?.token) {
        localStorage.setItem("token", auth?.token);
        navigate("/dashboard");
      }
    },
  });

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
                Admin Dashboard Login
              </Typography>
              <TextField
                label="User name"
                name="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
                helperText={formik.touched.email && formik.errors.userName}
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

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>
            </CardContent>
          </Card>
        </Form>
      </Box>
    </FormikProvider>
  );
};

export default AdminLogin;
