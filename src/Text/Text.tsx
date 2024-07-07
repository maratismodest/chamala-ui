import React, {ComponentPropsWithoutRef, FC} from "react";
import styles from "./Text.module.css";

export interface TextProps extends ComponentPropsWithoutRef<"p"> {
}

const Text: FC<TextProps> = ({children, className, ...props}) => {
  const classes = [styles.text, className];

  return (
    <p className={classes.join(" ")} {...props}>
      {children}
    </p>
  );
};

export default Text;
