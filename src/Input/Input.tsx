import React, { ComponentPropsWithRef } from "react";
import "./Input.css";

export interface InputProps extends ComponentPropsWithRef<"input"> {}

export const Input: React.FC<InputProps> = (props) => {
  const { className, children, onChange, ref, value, placeholder, ...rest } =
    props;
  return (
    <input
      className={["input", className].join(" ")}
      onChange={onChange}
      placeholder={placeholder}
      ref={ref}
      value={value}
      {...rest}
    />
  );
};
