import { createSlice } from '@reduxjs/toolkit'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCart: (state, action) => {

      console.log(action.payload);

      const existItem = state.cartItems.find(item => item._id === action.payload._id)

      if (!existItem) {
        state.cartItems.push(action.payload)
       
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item added to cart",
          showConfirmButton: false,
          timer: 1500
        });

      } else {
        console.log("the book is already added")
        Swal.fire({
          // title: "Are you sure?",
          text: "the book is already added",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok"
        })
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload)
    }
  }
})

export const { addToCart, removeItem } = cartSlice.actions

export default cartSlice.reducer
