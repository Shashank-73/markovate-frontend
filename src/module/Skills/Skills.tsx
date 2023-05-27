import { Tag, Avatar } from "antd";

import { PzButton, PzInput } from "../../components/index";

import avatar from "../../assets/Ellipse 2.png";

import skillsStyles from "./skills.module.scss";
import { useState } from "react";

const Skills = () => {
  const [tags, setTags] = useState<any>([]);
  const [value, setValue] = useState("");

  const [initial, _] = useState([
    "React",
    "HTML",
    "Node.js",
    "Team Assessment",
    "MySQL",
    "Python",
    "HTML5",
    "Technical Debt Assessment",
  ]);

  const addTag = (e: any) => {
    if (e.target.value?.at(-1) == ",") {
      setTags([...tags, value]);
      setValue("");
      return;
    }
    setValue(e.target.value);
  };

  // Variables
  return (
    <div className={skillsStyles.interest}>
      <div className={skillsStyles.left}>
        <div className={skillsStyles.leftWrapper}>
          <div>
            <div>
              <span className={skillsStyles.role}>
                What role would you like to hire?
              </span>
            </div>
            <PzInput
              placeholder="Desired area of expertise (eg. JavaScript, Ruby etc)"
              size="large"
              className={skillsStyles.input}
              name="tag"
              onChange={addTag}
              value={value}
            />
            <div className={skillsStyles.tags}>
              {tags.length
                ? tags.map((tag: any) => {
                    return (
                      <div className={skillsStyles.tag}>
                        <Tag closable className={skillsStyles.tag2}>
                          {tag}
                        </Tag>
                      </div>
                    );
                  })
                : null}
            </div>
            <div className={skillsStyles.skillsBox}>
              <div>Popular skills for CTO</div>
              <div className={skillsStyles.tags}>
                {initial.length
                  ? initial.map((tag: any) => {
                      return (
                        <div className={skillsStyles.tag}>
                          <Tag closable className={skillsStyles.tag2}>
                            {tag}
                          </Tag>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
            <div className={skillsStyles.div}></div>
            <div className={skillsStyles.buttonWrap}>
              <PzButton className={skillsStyles.button} type="default">
                Back
              </PzButton>
              <PzButton className={skillsStyles.skills} type="ghost">
                Next: Skills
              </PzButton>
            </div>
          </div>
        </div>
      </div>
      <div className={skillsStyles.right}>
        <div className={skillsStyles.rightWrap}>
          <Avatar src={avatar} className={skillsStyles.avatar} />
          <div className={skillsStyles.profile}>Edward Pascual, PSM</div>
          <div className={skillsStyles.role}>
            Project Manager at Trapeze Group
          </div>
          <div className={skillsStyles.about}>
            “ The excellent design and stability of the app has pleased internal
            stakeholders. We are very happy with their service. ”
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
