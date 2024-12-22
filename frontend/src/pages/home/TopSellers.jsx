import { Box, Typography, TextField, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BookCard from '../books/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useGetBooksQuery } from '../../redux/features/books/booksApi';

const TopSellers = () => {
  const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"];
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { data: books = [] } = useGetBooksQuery();

  useEffect(() => {
    setFilteredBooks(selectedCategory === "Choose a genre" ? books : books.filter(book => book.category.toLowerCase() === selectedCategory.toLowerCase()));
  }, [selectedCategory, books]);

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
          sx={{ minWidth: 120 }}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
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
          {filteredBooks?.map((book) => (
            <SwiperSlide key={book.id}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
    </Box>
  );
}

export default TopSellers;