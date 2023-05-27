/**
 @param (type: SIGNIN_ACTION_TYPES.types, payload: INITIAL_STATE_DTO.state)
 @returns (STATE)
 */

import { SIGNIN_ACTION_TYPES } from "../../../common/constants/action.constants";

interface INITIAL_STATE_DTO {
  loading: boolean;
  email: string;
  password: string;
  error: string;
}

interface ACTION_TYPES_DTO {
  type: string;
  payload?: unknown;
  error?: string;
}

export const INITIAL_STATE: INITIAL_STATE_DTO = {
  loading: false,
  email: "",
  password: "",
  error: "",
};

export const signInReducer = (
  state: INITIAL_STATE_DTO | any,
  action: ACTION_TYPES_DTO
) => {
  switch (action.type) {
    case SIGNIN_ACTION_TYPES.EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SIGNIN_ACTION_TYPES.PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SIGNIN_ACTION_TYPES.PENDING:
      return {
        ...state,
        loading: true,
      };
    case SIGNIN_ACTION_TYPES.FULFILLED:
      return {
        ...state,
        loading: false,
      };
    case SIGNIN_ACTION_TYPES.REJECTED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
  }
};
