import axios from 'axios';

import {
  ALL_DISEA_FAIL,
  ALL_DISEA_SUCCESS,
  ALL_DISEA_REQUEST,
  CLEAR_ERRORS,
} from '../constants/diseaConstants';

export const getDisea = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_DISEA_REQUEST });

    const { data } = await axios.get('/api/v1/diseas');

    dispatch({
      type: ALL_DISEA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_DISEA_FAIL,
      payload: error.response.data.message,
    });
  }
};

// clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
