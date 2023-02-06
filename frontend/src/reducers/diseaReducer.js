import {
  ALL_DISEA_FAIL,
  ALL_DISEA_SUCCESS,
  ALL_DISEA_REQUEST,
  CLEAR_ERRORS,
} from '../constants/diseaConstants';

export const diseaReducer = (state = { diseas: [] }, action) => {
  switch (action.type) {
    case ALL_DISEA_REQUEST:
      return {
        loading: true,
        disea: [],
      };

    case ALL_DISEA_SUCCESS:
      return {
        loading: false,
        disea: action.payload.diseas,
        diseasCount: action.payload.diseasCount,
      };
    case ALL_DISEA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
