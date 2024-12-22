import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import BookCard from '../books/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useGetBooksQuery } from '../../redux/features/books/booksApi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Recommended = () => {
  // const [books, setBooks] = useState([]);

  // useEffect( () => {
  //   fetch("books.json")
  //     .then(res => res.json())
  //     .then(data => setBooks(data))
  //     .catch(err => console.log(err));

  // }, []);

  var { data: books = [] } = useGetBooksQuery();
  console.log(books);
  
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Recommended for you
      </Typography>

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {books?.length > 0 &&
            books.slice(3, 9).map((book) => (
              <SwiperSlide key={book.id}>
                <BookCard book={book} />
              </SwiperSlide>
            ))}
        </Box>
      </Swiper>
    </Box>
  );
};

export default Recommended;
