// src/store/reducers/checkout.js

const initialState = {
  isFetching: false,
  error: null,
  response: null,
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECKOUT_REQUEST':
      return { ...state, isFetching: true };
    case 'CHECKOUT_SUCCESS':
      return { ...state, isFetching: false, response: action.payload };
    case 'CHECKOUT_FAILURE':
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};

export default checkoutReducer;
