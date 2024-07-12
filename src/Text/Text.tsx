import React, {ComponentPropsWithoutRef, FC} from "react";
import "./Text.css";
import classnamer from "../utils/classnamer";

export interface TextProps extends ComponentPropsWithoutRef<"p"> {
}

const classes = ["text"];

const Text: FC<TextProps> = ({children, className, ...props}) => {
    if (className) {
        classes.push(className)
    }
    return (
        <p className={classnamer(classes)} {...props}>{children}</p>
    );
};

export default Text;
