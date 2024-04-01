// cartReducer.js
import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY} from './Action';

const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Tìm kiếm xem sản phẩm đã có trong giỏ hàng hay chưa
            if (!action.payload || !action.payload.id || action.payload.quantity <= 0) {
                return state;
            }

            // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay không
            const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);

            if (existingItemIndex !== -1) {
                // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex].quantity += action.payload.quantity;

                // Xóa sản phẩm nếu số lượng là 0
                if (updatedCart[existingItemIndex].quantity <= 0) {
                    updatedCart.splice(existingItemIndex, 1);
                }

                return {
                    ...state,
                    cart: updatedCart
                };
            } else {
                // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm mới vào
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload }]
                };
            }

        case REMOVE_FROM_CART:
            // Lọc ra các sản phẩm không phải sản phẩm cần xóa
            const updatedCart = state.cart.filter((item) => item.id !== action.payload);
            return {...state, cart: updatedCart};

        case UPDATE_QUANTITY:
            // Tìm và cập nhật số lượng của sản phẩm tương ứng
            const updatedItems = state.cart.map((item) => {
                if (item.id === action.payload.productId) {
                    return {...item, quantity: action.payload.quantity};
                }
                return item;
            });
            return {...state, cart: updatedItems};

        default:
            return state;
    }
};

export default cartReducer;