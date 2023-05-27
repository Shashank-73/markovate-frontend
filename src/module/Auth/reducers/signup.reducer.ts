/**
 @param (type: SIGNIN_ACTION_TYPES.types, payload: INITIAL_STATE_DTO.state)
 @returns (STATE)
 */

import { SIGNUP_ACTION_TYPES } from "../../../common/constants/action.constants";

interface INITIAL_STATE_DTO {
  loading: boolean;
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  conatctNo: number;
  contactNoOptional: number;
  companySize: number;
  companyRevenue: number;
  password: string;
  sendEmails: boolean;
  privacyPolicy: boolean;
  error: string;
}

interface ACTION_TYPES_DTO {
  type: string;
  payload?: unknown;
  error?: string;
}

export const INITIAL_STATE: INITIAL_STATE_DTO = {
  loading: false,
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  conatctNo: 0,
  contactNoOptional: 0,
  companySize: 0,
  companyRevenue: 0,
  password: "",
  sendEmails: false,
  privacyPolicy: false,
  error: "",
};

export const signupReducer = (
  state: INITIAL_STATE_DTO | any,
  action: ACTION_TYPES_DTO
) => {
  switch (action.type) {
    case SIGNUP_ACTION_TYPES.FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      };
    case SIGNUP_ACTION_TYPES.LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };
    case SIGNUP_ACTION_TYPES.COMPANYT_NAME:
      return {
        ...state,
        companyName: action.payload,
      };
    case SIGNUP_ACTION_TYPES.EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SIGNUP_ACTION_TYPES.CONTACT_NO:
      return {
        ...state,
        contactNo: action.payload,
      };
    case SIGNUP_ACTION_TYPES.CONATCT_NO_OPTIONAL:
      return {
        ...state,
        contactNoOptional: action.payload,
      };
    case SIGNUP_ACTION_TYPES.COMPANY_SIZE:
      return {
        ...state,
        companySize: action.payload,
      };
    case SIGNUP_ACTION_TYPES.COMPANY_REVENUE:
      return {
        ...state,
        companyRevenue: action.payload,
      };
    case SIGNUP_ACTION_TYPES.SEND_EMAILS:
      return {
        ...state,
        sendEmails: action.payload,
      }; case SIGNUP_ACTION_TYPES.PRIVACY_POLICY:
      return {
        ...state,
        privacyPolicy: action.payload,
      };
    case SIGNUP_ACTION_TYPES.PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SIGNUP_ACTION_TYPES.PENDING:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_ACTION_TYPES.FULFILLED:
      return {
        ...state,
        loading: false,
      };
    case SIGNUP_ACTION_TYPES.REJECTED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
  }
};
