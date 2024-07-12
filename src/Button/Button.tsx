import React, {ComponentPropsWithoutRef} from "react";
import "./Button.css";
import classnamer from "../utils/classnamer";

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    color?: string;
    big?: boolean;
}

export default function Button({children, className, color, big, ...props}: ButtonProps) {
    const classes = ["button"];
    if (big) {
        classes.push("button_big");
    }

    return (
        <button className={classnamer(classes)} style={{color}} {...props}>
            {children}
        </button>
    );
};
