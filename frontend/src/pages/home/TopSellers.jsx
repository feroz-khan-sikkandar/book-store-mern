import { Box, Typography, TextField, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useGetBooksQuery } from '../../redux/features/books/booksApi';
// import required modules

const TopSellers = () => {
  const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]
  const [selectedCategory, setSelectedCategory] = useState("choose a genre");
  // const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  // useEffect( () => {
  //   fetch("books.json")
  //     .then(res => res.json())
  //     .then(data => setBooks(data))
  //     .catch(err => console.log(err));
    
  // }, []);

  var { data: books = [] } = useGetBooksQuery() ;
  
  console.log(books)

  useEffect(() => {

    console.log(books)

    console.log(selectedCategory);

    // If "Choose a genre" is selected, show all books
    if (selectedCategory === "choose a genre") {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(books.filter(book => book.category.toLowerCase() === selectedCategory.toLowerCase()));
    }
  
  }, [selectedCategory]);

  console.log(filteredBooks);
  
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Top Sellers
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
        <TextField
          select
          label="Filter"
          variant="outlined"
          size="small"
          value={selectedCategory}
          defaultValue={selectedCategory}

          sx={{ minWidth: 120 }}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <MenuItem key={index} value={ category === "choose a genre" ? "" : category.toLowerCase()}>
              {category}
            </MenuItem>
          ))}

         
        </TextField>

      </Box>

         <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
          {filteredBooks.map((book) => (
            <SwiperSlide key={book.id}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
        </Box>
        </Swiper>
    </Box>
  )
}

export default TopSellers