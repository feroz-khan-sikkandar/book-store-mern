import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Formik, Form, Field, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useCreateOrderMutation } from "../../redux/features/orders/ordersApi";

// Validation Schema
const CheckoutSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  postalCode: Yup.string().required("Postal Code is required"),
  cardNumber: Yup.string()
    .min(16, "Card Number must be 16 digits")
    .required("Card Number is required"),
  expirationDate: Yup.string().required("Expiration Date is required"),
  cvv: Yup.string().min(3, "CVV must be 3 digits").required("CVV is required"),
});

// Checkout Page Component
function CheckoutPage() {
  const { cartItems } = useSelector((state) => state.cart);
  console.log("cartItems", cartItems);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item?.newPrice, 0)
    .toFixed(2);

  const [createOrder, { isLoading, error }] = useCreateOrderMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
      productIds: cartItems?.map((item) => item?._id),
      totalPrice,
    },
    validationSchema: CheckoutSchema,
    onSubmit: async (values) => {
      console.log("Form Values:", values);
      alert("Order submitted successfully!");

      await createOrder(values);
      navigate("/orderDetails");
    },
  });

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            {/* User Information */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                {...formik.getFieldProps("fullName")}
                error={Boolean(
                  formik.touched.fullName && formik.errors.fullName
                )}
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                {...formik.getFieldProps("email")}
                error={Boolean(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            {/* Shipping Address */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Shipping Address
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                {...formik.getFieldProps("address")}
                error={Boolean(formik.touched.address && formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="City"
                {...formik.getFieldProps("city")}
                error={Boolean(formik.touched.city && formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Postal Code"
                {...formik.getFieldProps("postalCode")}
                error={Boolean(
                  formik.touched.postalCode && formik.errors.postalCode
                )}
                helperText={
                  formik.touched.postalCode && formik.errors.postalCode
                }
              />
            </Grid>

            {/* Payment Details */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Payment Details
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Card Number"
                {...formik.getFieldProps("cardNumber")}
                error={Boolean(
                  formik.touched.cardNumber && formik.errors.cardNumber
                )}
                helperText={
                  formik.touched.cardNumber && formik.errors.cardNumber
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Expiration Date (MM/YY)"
                {...formik.getFieldProps("expirationDate")}
                error={Boolean(
                  formik.touched.expirationDate && formik.errors.expirationDate
                )}
                helperText={
                  formik.touched.expirationDate && formik.errors.expirationDate
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="CVV"
                {...formik.getFieldProps("cvv")}
                error={Boolean(formik.touched.cvv && formik.errors.cvv)}
                helperText={formik.touched.cvv && formik.errors.cvv}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Box mt={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Place Order
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </Container>
  );
}

export default CheckoutPage;
