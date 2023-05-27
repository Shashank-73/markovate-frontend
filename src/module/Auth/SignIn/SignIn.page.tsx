import { ChangeEvent, useReducer } from "react";
import { useNavigate } from "react-router";
import { PzButton, PzCard, PzInput } from "../../../components/index";

import { ROUTES } from "../../../common/routes/routes.constants";
import signinStyles from "./signIn.module.scss";
import { SIGNIN_ACTION_TYPES } from "../../../common/constants/action.constants";
import { useSetRecoilState } from "recoil";
import { INITIAL_STATE, signInReducer } from "../reducers/signin.reducer";
import { AtomAuthUser } from "../../../store/Auth/auth.slice";

const SignUp = () => {
  // Variables
  const [userInfo, setUserInfo] = useReducer(signInReducer, INITIAL_STATE);

  const setAuthUser = useSetRecoilState(AtomAuthUser);

  const navigate = useNavigate();

  // Functions
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === SIGNIN_ACTION_TYPES.EMAIL) {
      return setUserInfo({ type: SIGNIN_ACTION_TYPES.EMAIL, payload: value });
    }
    setUserInfo({ type: SIGNIN_ACTION_TYPES.PASSWORD, payload: value });
  };

  const handleLogin = async () => {
    try {
      const res = await fetch("https://markovate-backend-kappa.vercel.app/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const data = await res.json();
      localStorage.setItem("AT", data.accessToken);

      const user = await fetch("https://markovate-backend-kappa.vercel.app/user", {
        headers: {
          "Content-Type": "application/json",
          authorization: `${data.accessToken}`,
        },
      });
      const userData = await user.json();
      setAuthUser(userData);
      navigate(ROUTES.INTEREST);
    } catch (err) {
      console.log("e", err);
    }
  };

  return (
    <>
      <div className={signinStyles.signinWrapper}>
        <PzCard className={signinStyles.card} bodyClassName={signinStyles.body}>
          <div className={signinStyles.iconWrapper}>
            <h3 className={signinStyles.headerText}>Log in to Markovate</h3>
          </div>
          <div className={signinStyles.inputWrapper}>
            <PzInput
              placeholder="Email"
              size="large"
              className={signinStyles.input}
              onChange={handleChange}
              name="email"
              value={userInfo.email}
            />
            <PzInput
              placeholder="Password"
              type="password"
              size="large"
              className={signinStyles.input}
              onChange={handleChange}
              name="password"
              value={userInfo.password}
            />
            <div>
              <PzButton className={signinStyles.button} onClick={handleLogin}>
                Submit
              </PzButton>
            </div>
            <div className={signinStyles.signinBackWrapper}>
              <span
                onClick={() => navigate(ROUTES.SIGN_UP)}
                className={signinStyles.backToLoginBtn}
              >
                Do not have an account? Sign up
              </span>
            </div>
          </div>
          <span className={signinStyles.copyRight}>
            © Copyright 2010 - 2023 Markovate
          </span>
        </PzCard>
      </div>
    </>
  );
};

export default SignUp;
