import React from 'react'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useParams } from 'react-router-dom'
import { useGetBookByIdQuery } from '../../redux/features/books/booksApi';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const SingleBook = () => {

  const { id } = useParams();
    const dispatch = useDispatch();

  const {data: book, isLoading, isError } = useGetBookByIdQuery(id)

  console.log(book);
    const getImageUrl = (imageName) => {
      return `/assets/books/${imageName}`;
  };
  
   const handleAddToCart = (book) => {
     console.log(book);
     dispatch(addToCart(book));
   };


  return (
    <Card sx={{ maxWidth: 600, boxShadow: 3, p: 2 }}>
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom>
          {book?.title}
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <CardMedia
            component="img"
            image={getImageUrl(book?.coverImage)}
            alt={book?.title}
            sx={{ width: "100%", height: "auto", mb: 2 }}
          />

          <Box mb={2}>
            <Typography variant="body1" color="text.secondary" mb={1}>
              <strong>Author:</strong> {book?.author || "admin"}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              <strong>Published:</strong>{" "}
              {new Date(book?.createdAt).toLocaleDateString()}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              mb={1}
              sx={{ textTransform: "capitalize" }}
            >
              <strong>Category:</strong> {book?.category}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <strong>Description:</strong> {book?.description}
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={() => handleAddToCart(book)}
            // startIcon={<FiShoppingCart />}
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default SingleBook