import React, { ComponentPropsWithRef } from "react";
import styles from "./Input.module.css";
import classnamer from "../helpers/classnamer";

export interface InputProps extends ComponentPropsWithRef<"input"> {
  big?: boolean;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    big,
    className,
    children,
    onChange,
    ref,
    value,
    placeholder,
    ...rest
  } = props;
  return (
    <input
      className={classnamer([
        styles.input,
        big && styles.input__big,
        className,
      ])}
      onChange={onChange}
      placeholder={placeholder}
      ref={ref}
      value={value}
      {...rest}
    />
  );
};
