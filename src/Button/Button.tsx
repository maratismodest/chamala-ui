import React, { ComponentPropsWithRef } from "react";
import "./Button.css";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, onClick, ref, ...rest } = props;
  return (
    <button
      className={["button", className].join(" ")}
      onClick={onClick}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
};
