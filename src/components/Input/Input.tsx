import { ChangeEvent, KeyboardEvent, ReactNode } from "react";

import { Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

type Props = {
  name: string;
  type?: string;
  value?: string;
  size?: SizeType;
  className?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

const PzInput = (props: Props) => {
  const {
    name,
    type,
    size,
    prefix,
    suffix,
    onChange,
    className,
    placeholder,
    ...restProps
  } = props;

  // Functions
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <>
      <Input
        type={type ?? "text"}
        size={size}
        placeholder={placeholder}
        onChange={handleChange}
        prefix={prefix}
        suffix={suffix}
        className={className}
        value={props.value ?? ""}
        name={name}
        onKeyUp={props.onKeyUp}
        {...restProps}
      />
    </>
  );
};

export default PzInput;
