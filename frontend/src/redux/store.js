import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './features/cart/cartSlice'
import { bookApi } from './features/books/booksApi'
import { ordersApi } from './features/orders/ordersApi'
import { adminApi } from './features/admin/adminApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware, ordersApi.middleware, adminApi.middleware),
})