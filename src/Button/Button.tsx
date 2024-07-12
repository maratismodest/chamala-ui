import React, {ComponentPropsWithoutRef} from "react";
import "./Button.css";
import classnamer from "../utils/classnamer";

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    color?: string;
    big?: boolean;
}

const classes = ["button"];

export default function Button({children, className, color, big, ...props}: ButtonProps) {
    if (big) {
        classes.push("button__big");
    }
    if (className) {
        classes.push(className)
    }

    return (
        <button {...props} className={classnamer(classes)} style={{color}}>
            {children}
        </button>
    );
};
