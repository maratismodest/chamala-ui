import React, { ComponentPropsWithoutRef, FC } from "react";
import "./MyText.css";

export interface MyInputProps extends ComponentPropsWithoutRef<"p"> {}

const MyText: FC<MyInputProps> = ({ children, ...props }) => {
  const classes = ["my-text"];

  return (
    <p className={classes.join(" ")} {...props}>
      {children}
    </p>
  );
};

export default MyText;
