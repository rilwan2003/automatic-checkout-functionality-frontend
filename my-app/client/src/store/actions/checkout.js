// src/store/actions/checkout.js
import axios from 'axios';

export const checkoutRequest = () => ({
  type: 'CHECKOUT_REQUEST',
});

export const checkoutSuccess = (response) => ({
  type: 'CHECKOUT_SUCCESS',
  payload: response,
});

export const checkoutFailure = (error) => ({
  type: 'CHECKOUT_FAILURE',
  payload: error,
});

export const checkout = (data) => {
  return (dispatch) => {
    dispatch(checkoutRequest());
    axios.post('/api/checkout', data)
      .then((response) => {
        dispatch(checkoutSuccess(response));
      })
      .catch((error) => {
        dispatch(checkoutFailure(error));
      });
  };
};
