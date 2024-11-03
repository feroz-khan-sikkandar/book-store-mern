import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);

  const getImageUrl = (imageName) => {
    return `/assets/books/${imageName}`;
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id))
  };
  return (
    <>
      {cartItems?.map((item) => (
        <Box sx={{ display: "flex" }}>
          <img
            src={getImageUrl(item.coverImage)}
            alt="Description"
            style={{ width: "100px", height: "100px" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6">{item?.title}</Typography>
              <Typography variant="h6">Category : {item?.category}</Typography>
            </Box>

            <Box sx={{ ml: 5 }}>
              <Typography variant="h6">{item?.newPrice}</Typography>
              <Button onClick={() => handleRemove(item._id)}>Remove</Button>
            </Box>
          </Box>
        </Box>
      ))}
      <Box
        sx={{ display: "flex", justifyContent: "center" }}
        onClick={() => navigate("/checkout")}
      >
        <Button variant="contained">Checkout</Button>
      </Box>
    </>
  );
};

export default CartPage;
