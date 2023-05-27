import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { AtomAuthUser } from "../store/Auth/auth.slice";
import { ROUTES } from "../common/routes/routes.constants";

const AuthLayout = () => {
  const navigate = useNavigate();

  const setUser = useSetRecoilState(AtomAuthUser);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("AT");
        const user = await fetch("https://markovate-backend-srqo.vercel.app/user", {
          headers: {
            "Content-Type": "application/json",
            authorization: `${token}`,
          },
        });
        const userData = await user.json();
        setUser(userData);
        if (!userData.email) {
          navigate(ROUTES.SIGN_UP);
        } else if (userData.email) {
          navigate(ROUTES.INTEREST);
        }
      } catch (err) {
        console.log("e", err);
      }
    };
    fetchUser();
  }, []);
  return <Outlet />;
};

export default AuthLayout;
