import React, {ComponentPropsWithoutRef, FC} from "react";
import styles from "./Input.module.css";

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  big: boolean;
  label: string;
}

const Input: FC<InputProps> = ({big, placeholder, label, ...props}) => {
  const classes = [styles.input];
  if (big) {
    classes.push(styles.input_big);
  }
  return (
    <label>
      {label}
      <input
        className={classes.join(" ")}
        placeholder={placeholder}
        {...props}
      />
    </label>
  );
};

export default Input;
