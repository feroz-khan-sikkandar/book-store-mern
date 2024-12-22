import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from "@mui/material";
import { useGetOrderByEmailQuery } from "../../redux/features/orders/ordersApi";
import { useAuth } from "../../context/AuthContext";

// Sample Data Structure for the Order
const orderData = {
  orderNumber: "ORD12345",
  orderDate: "2023-10-10",
  customerName: "John Doe",
  customerEmail: "john.doe@example.com",
  items: [
    { title: "Book Title 1", author: "Author 1", price: 15.99, quantity: 2 },
    { title: "Book Title 2", author: "Author 2", price: 12.49, quantity: 1 },
    { title: "Book Title 3", author: "Author 3", price: 18.75, quantity: 1 },
  ],
};

// Calculate total price
const calculateTotal = (items) => {
  return items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
};

const OrderInfo = ({ order = orderData }) => {
  const { currentUser } = useAuth();
  const { data: orders = {} } = useGetOrderByEmailQuery(currentUser?.email);

  console.log("orders --------------> ", orders);

  return (
    <Card variant="outlined" sx={{ maxWidth: 800, margin: "auto", mt: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Order Details
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {/* Order Info */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Order Number:</Typography>
            <Typography variant="body2">{orders?._id}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Order Date:</Typography>
            <Typography variant="body2">{orders?.updatedAt}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Customer Name:</Typography>
            <Typography variant="body2">{orders?.fullName}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Customer Email:</Typography>
            <Typography variant="body2">{orders?.email}</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        {/* Items Table */}
        <TableContainer component={Paper} variant="outlined">
          <Table aria-label="Order Items Table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                {/* <TableCell align="right">Total</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders?.productIds?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item?.title}</TableCell>
                  <TableCell>{item?.category}</TableCell>
                  <TableCell>{item?.newPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 2 }} />

        {/* Total Amount */}
        <Grid container justifyContent="flex-end" sx={{ mt: 1 }}>
          <Typography variant="h6">
            Total: ${orders.productIds?.reduce((accumalator, currentItem) => { return accumalator + currentItem?.newPrice}, 0)}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default OrderInfo;
