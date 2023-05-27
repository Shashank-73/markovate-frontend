import { ReactNode } from "react";

import { Button } from "antd";
import { ButtonHTMLType, ButtonType } from "antd/es/button";

type Props = {
  type?: ButtonType;
  icon?: ReactNode;
  loading?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  htmlType?: ButtonHTMLType;
  label?: string;
};

// Button component
const PzButton = (props: Props) => {
  const { type, icon, children, onClick, className, htmlType, ...restProps } =
    props;
  return (
    <Button
      type={type ?? "primary"}
      icon={icon}
      onClick={onClick}
      className={`${className}`}
      loading={props.loading}
      htmlType={htmlType}
      {...restProps}
    >
      {children ?? restProps.label}
    </Button>
  );
};

export default PzButton;
