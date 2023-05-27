export const ACTION_TYPES = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

export const SIGNIN_ACTION_TYPES = {
  EMAIL: "email",
  PASSWORD: "password",
  ...ACTION_TYPES,
};

export const SIGNUP_ACTION_TYPES = {
  FIRST_NAME: "firstName",
  LAST_NAME: "lastName",
  COMPANYT_NAME: "companyName",
  EMAIL: "email",
  CONTACT_NO: "contactNo",
  CONATCT_NO_OPTIONAL: "contactNoOptional",
  COMPANY_SIZE: "comapanySize",
  COMPANY_REVENUE: "companyRevenue",
  PASSWORD: "password",
  SEND_EMAILS: "sendEmails",
  PRIVACY_POLICY: "privacyPolicy",
  ...ACTION_TYPES,
};

