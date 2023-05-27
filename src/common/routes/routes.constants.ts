export const MODULES = {
  auth: "/auth",
  interest: "/interest",
};

export const ROUTES = {
  LOGIN: `${MODULES.auth}/login`,
  SIGN_UP: `${MODULES.auth}/signup`,
  INTEREST: `${MODULES.interest}`,
  SKILLS: `${MODULES.interest}/skills`,
};
