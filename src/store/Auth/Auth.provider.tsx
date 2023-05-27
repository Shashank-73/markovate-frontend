import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../common/routes/routes.constants";
import { useRecoilState } from "recoil";
import { AtomAuthUser } from "./auth.slice";

type Props = {
  children: ReactNode;
};
const AuthProvider = (props: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(AtomAuthUser);

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
      } catch (err) {
        console.log("e", err);
      }
    };
    if (!Object.keys(user).length) {
      navigate(ROUTES.SIGN_UP);
    } else if (Object.keys(user).length) {
      navigate(ROUTES.INTEREST);
    }
    fetchUser();
  }, []);

  return <>{props.children}</>;
};

export default AuthProvider;
