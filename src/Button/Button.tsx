import React, { ComponentPropsWithoutRef, FC } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  color: string;
  big?: boolean;
}

const Button: FC<ButtonProps> = ({ children, color, big, ...props }) => {
  const rootClasses = [styles.button];
  if (big) {
    rootClasses.push(styles.button_big);
  }

  return (
    <button {...props} className={rootClasses.join(" ")} style={{ color }}>
      {children}
    </button>
  );
};

export default Button;
