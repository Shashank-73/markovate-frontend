import { useNavigate } from "react-router";
import { Radio, Avatar } from "antd";

import { PzButton } from "../../components/index";

import interestStyles from "./interest.module.scss";

import avatar from "../../assets/Ellipse 2.png";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { AtomAuthUser } from "../../store/Auth/auth.slice";
import { ROUTES } from "../../common/routes/routes.constants";

const Interest = () => {
  const [user, setUser] = useRecoilState(AtomAuthUser);
  const [interestValue, setInterestValue] = useState(user.interest);

  const navigate = useNavigate();
  const interests = [
    {
      label: "Engineering",
      value: "Head of Engineering, CTO, VP of Engineering, Tech Lead",
    },
    {
      label: "Designers",
      value: "Web, Mobile, UI/UX, Branding, and Visual Designers",
    },
    {
      label: "Devops",
      value: "DevOps Engineer, DevOps Manager, Head of Infra",
    },
    {
      label: "Product Managers",
      value: "Digital Product Managers, Product Owners, and Business Analysts",
    },
  ];

  const handleInterest = async () => {
    try {
      navigate(ROUTES.SKILLS);
      const token = localStorage.getItem("AT");
      const user = await fetch("https://markovate-backend-srqo.vercel.app/interest", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          authorization: `${token}`,
        },
        body: JSON.stringify(interestValue),
      });
      const userData = await user.json();
      setUser(userData);
    } catch (err) {
      console.log("e", err);
    }
  };
  // Variables
  return (
    <div className={interestStyles.interest}>
      <div className={interestStyles.left}>
        <div className={interestStyles.leftWrapper}>
          <div>
            <div className={interestStyles.iconWrapper}>
              <h3 className={interestStyles.headerText}>
                Thank you for your interest in Markovate.
              </h3>
            </div>
            <div>
              <span className={interestStyles.role}>
                What role would you like to hire?
              </span>
            </div>
            {interests.map((interest: any) => {
              return (
                <div className={interestStyles.interestWrapper}>
                  <div className={interestStyles.label}>
                    <div>
                      <Radio
                        checked={interestValue === interest.label}
                        id={interest.label}
                        onChange={(e) => setInterestValue(e.target.id as any)}
                      />
                      {interest.label}
                    </div>
                  </div>
                  <div className={interestStyles.value}>{interest.value}</div>
                </div>
              );
            })}
            <div className={interestStyles.div}></div>
            <div className={interestStyles.buttonWrap}>
              <PzButton className={interestStyles.button} type="default">
                Back
              </PzButton>
              <PzButton
                className={interestStyles.skills}
                type="ghost"
                onClick={handleInterest}
              >
                Next: Skills
              </PzButton>
            </div>
          </div>
        </div>
      </div>
      <div className={interestStyles.right}>
        <div className={interestStyles.rightWrap}>
          <Avatar src={avatar} className={interestStyles.avatar} />
          <div className={interestStyles.profile}>Edward Pascual, PSM</div>
          <div className={interestStyles.role}>
            Project Manager at Trapeze Group
          </div>
          <div className={interestStyles.about}>
            “ The excellent design and stability of the app has pleased internal
            stakeholders. We are very happy with their service. ”
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
