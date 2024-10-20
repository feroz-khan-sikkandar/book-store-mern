import React from 'react'
import { Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTheme } from '@mui/material/styles';


const BookCard = ({ book }) => {

   const theme = useTheme();
  
  const getImageUrl = (imageName) => {
    return (`/assets/books/${imageName}`);
  };

  return (
    <Card sx={{ display: 'flex', maxWidth: 500, height: 200 }}>
      <CardMedia
        component="img"
        sx={{ width: 140 }}
        image={getImageUrl(book.coverImage)}
        alt={book.title}
      />
      
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
         
          <Typography component="div" variant="h6" sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              alignSelf: 'flex-start',
            }}>
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              alignSelf: 'flex-start',
            }}>
            {book.description}
          </Typography>

           {/* <Box sx={{ display: 'flex', flexDirection: 'column', pb: 1 }}> */}
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%',justifyContent: 'space-between' }}>
            <Typography variant="subtitle1" component="div">
              ${book.newPrice}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ ml: 1, textDecoration: 'line-through', textDecorationColor: theme.palette.text.secondary, textDecorationThickness: 2 }}>
              ${book.oldPrice}
            </Typography>
            </Box>
            
        {/* </Box> */}
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<ShoppingCartIcon />}
            sx={{ textTransform: 'none', mt: 1, color: theme.palette.buttonText.main  }}
          >
            Add to Cart
          </Button>
        </CardContent>

        
       
      </Box>
    </Card>
  )
}

export default BookCard
