import { ChangeEvent, useReducer } from "react";
import { useNavigate } from "react-router";
import { Select, Checkbox } from "antd";

import { PzButton, PzCard, PzInput } from "../../../components/index";

import { ROUTES } from "../../../common/routes/routes.constants";
import signupStyles from "./signup.module.scss";
import { INITIAL_STATE, signupReducer } from "../reducers/signup.reducer";
import { useSetRecoilState } from "recoil";
import { AtomUser } from "../../../store/Auth/auth.slice";
import { SIGNUP_ACTION_TYPES } from "../../../common/constants/action.constants";

const SignUp = () => {
  // Variables
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useReducer(signupReducer, INITIAL_STATE);

  const setSignUpUser = useSetRecoilState(AtomUser);

  // Functions
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === SIGNUP_ACTION_TYPES.FIRST_NAME) {
      return setUserInfo({
        type: SIGNUP_ACTION_TYPES.FIRST_NAME,
        payload: value,
      });
    } else if (name === SIGNUP_ACTION_TYPES.LAST_NAME) {
      return setUserInfo({
        type: SIGNUP_ACTION_TYPES.LAST_NAME,
        payload: value,
      });
    } else if (name === SIGNUP_ACTION_TYPES.COMPANYT_NAME) {
      return setUserInfo({
        type: SIGNUP_ACTION_TYPES.COMPANYT_NAME,
        payload: value,
      });
    } else if (name === SIGNUP_ACTION_TYPES.EMAIL) {
      return setUserInfo({ type: SIGNUP_ACTION_TYPES.EMAIL, payload: value });
    } else if (name === SIGNUP_ACTION_TYPES.CONTACT_NO) {
      return setUserInfo({
        type: SIGNUP_ACTION_TYPES.CONTACT_NO,
        payload: value,
      });
    } else if (name === SIGNUP_ACTION_TYPES.CONATCT_NO_OPTIONAL) {
      return setUserInfo({
        type: SIGNUP_ACTION_TYPES.CONATCT_NO_OPTIONAL,
        payload: value,
      });
    } else if (name === SIGNUP_ACTION_TYPES.PASSWORD) {
      return setUserInfo({
        type: SIGNUP_ACTION_TYPES.PASSWORD,
        payload: value,
      });
    } else if (name === SIGNUP_ACTION_TYPES.SEND_EMAILS) {
      return setUserInfo({
        type: SIGNUP_ACTION_TYPES.SEND_EMAILS,
        payload: !userInfo.sendEmails,
      });
    } else if (name === SIGNUP_ACTION_TYPES.PRIVACY_POLICY) {
      return setUserInfo({
        type: SIGNUP_ACTION_TYPES.PRIVACY_POLICY,
        payload: !userInfo.privacyPolicy,
      });
    }
  };

  const handleSelectChange = (value: any) => {
    return setUserInfo({
      type: SIGNUP_ACTION_TYPES.COMPANY_SIZE,
      payload: value,
    });
  };

  const handleSelectChange2 = (value: any) => {
    return setUserInfo({
      type: SIGNUP_ACTION_TYPES.COMPANY_REVENUE,
      payload: value,
    });
  };

  const handleSignup = async () => {
    try {
      const res = await fetch("https://markovate-backend-srqo.vercel.app/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const data = await res.json();
      localStorage.setItem("AT", data.accessToken);

      const user = await fetch("https://markovate-backend-srqo.vercel.app/user", {
        headers: {
          "Content-Type": "application/json",
          "authorization": `${data.accessToken}`,
        },
      });
      const userData = await user.json();
      setSignUpUser(userData);
      navigate(ROUTES.INTEREST)
    } catch (err) {
      console.log("e", err);
    }
  };

  return (
    <>
      <div>
        <img src="../../../assets/logo.png" alt="Not" />
      </div>
      <div className={signupStyles.signupWrapper}>
        <PzCard className={signupStyles.card} bodyClassName={signupStyles.body}>
          <div className={signupStyles.iconWrapper}>
            <h3 className={signupStyles.headerText}>SignUp to hire talent</h3>
          </div>
          <div className={signupStyles.inputWrapper}>
            <div className={signupStyles.nameWrapper}>
              <PzInput
                placeholder="First Name"
                size="large"
                className={signupStyles.input}
                onChange={handleChange}
                name="firstName"
                value={userInfo.firstName}
              />
              <PzInput
                placeholder="Last Name"
                size="large"
                className={signupStyles.input}
                onChange={handleChange}
                name="lastName"
                value={userInfo.lastName}
              />
            </div>
            <PzInput
              placeholder="Company Name"
              size="large"
              className={signupStyles.input}
              onChange={handleChange}
              name="companyName"
              value={userInfo.companyName}
            />
            <PzInput
              placeholder="Work Email Address"
              size="large"
              className={signupStyles.input}
              onChange={handleChange}
              name="email"
              value={userInfo.email}
            />
            <div className={signupStyles.nameWrapper}>
              <PzInput
                placeholder="Contact No."
                size="large"
                className={signupStyles.input}
                onChange={handleChange}
                name="contactNo"
                value={userInfo.contactNo}
              />
              <PzInput
                placeholder="Contact No. (Optional)"
                size="large"
                className={signupStyles.input}
                onChange={handleChange}
                name="contactNoOptional"
                value={userInfo.contactNoOptional}
              />
            </div>
            <div className={signupStyles.nameWrapper}>
              <Select
                size="large"
                placeholder="Company Size"
                style={{ width: "100%", marginTop: "1.5rem" }}
                onChange={handleSelectChange}
                options={[
                  { value: "1 - 10", label: "1 - 10" },
                  { value: "10 - 50", label: "10 - 50" },
                  { value: "50 - 100", label: "50 - 100" },
                  { value: "100 - 200", label: "100 - 200" },
                ]}
              />
              <Select
                placeholder="Company Revenue"
                size="large"
                style={{ width: "100%", marginTop: "1.5rem" }}
                onChange={handleSelectChange2}
                options={[
                  { value: "$ 8938938", label: "$ 8938938" },
                  { value: "$ 67637637", label: "$ 67637637" },
                  { value: "$ 6484", label: "$ 6484" },
                  { value: "$ 563536", label: "$ 563536" },
                ]}
              />
            </div>
            <PzInput
              placeholder="Password"
              type="password"
              size="large"
              className={signupStyles.input}
              onChange={handleChange}
              name="password"
              value={userInfo.password}
            />
            <div className={signupStyles.checkboxWrapper}>
              <div className={signupStyles.checkbox}>
                <Checkbox name="sendEmails" onChange={handleChange as any}>
                  <p className={signupStyles.p}>
                    Send me emails with regarding talents that fits my needs
                  </p>
                </Checkbox>
              </div>
              <div className={signupStyles.checkbox}>
                <Checkbox name="privacyPolicy" onChange={handleChange as any}>
                  <p className={signupStyles.p}>
                    Yes, I understand and agree to the Terms of Service,
                    including User Agreement and Privacy Policy
                  </p>
                </Checkbox>
              </div>
            </div>
            <div>
              <PzButton className={signupStyles.button} onClick={handleSignup}>
                Submit
              </PzButton>
            </div>
            <div className={signupStyles.signinBackWrapper}>
              <span
                onClick={() => navigate(ROUTES.LOGIN)}
                className={signupStyles.backToLoginBtn}
              >
                Already have an account? Log in
              </span>
            </div>
          </div>
          <span className={signupStyles.copyRight}>
            © Copyright 2010 - 2023 Markovate
          </span>
        </PzCard>
      </div>
    </>
  );
};

export default SignUp;
