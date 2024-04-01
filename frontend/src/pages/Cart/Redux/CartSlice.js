    import {createSlice} from "@reduxjs/toolkit";

    const cartSlice = createSlice({
        name: 'cart',
        initialState: {
            cart: [],
            totalCart: 0,
            totalPrice: 0
        },
        reducers: {
            addToCart: (state, action) => {
                const productToAdd = action.payload.product;
                const existingItem = state.cart.find(item => item.product.id === productToAdd.id);

                if (existingItem) {
                    // Product exists, just update the quantity
                    existingItem.quantity += 1; // Assuming you always add one product at a time
                } else {
                    // New product, add to the cart
                    state.cart.push({ product: productToAdd, quantity: 1 });
                }

                // Also, update total price and total cart count
                state.totalPrice += productToAdd.price;
                state.totalCart += 1;
            },
            updateCart: (state, action) => {
                const {id, quantity} = action.payload;
                const existingItem = state.cart.find(item => item.product.id === id);

                if (existingItem) {
                    existingItem.quantity = quantity;
                }
            },
            removeFromCart: (state, action) => {
                const itemToRemove = state.cart.find(item => item.product.id === action.payload.id);

                if (itemToRemove) {
                    const updatedCart = state.cart.filter(item => item.product.id !== action.payload.id);
                    state.cart = updatedCart;
                    state.totalPrice -= itemToRemove.product.price * itemToRemove.quantity;
                    state.totalCart -= itemToRemove.quantity;
                }
            }
        }

    })
    export default cartSlice.reducer
    export const {addToCart, removeFromCart, updateCart} = cartSlice.actions