export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

// actions.js
export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: {
        ...product,
        quantity: 1, // Thêm sản phẩm với số lượng mặc định là 1
    },
});

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});

export const updateQuantity = (productId, quantity) => ({
    type: UPDATE_QUANTITY,
    payload: { productId, quantity },
});