import React, {ComponentPropsWithoutRef, FC} from "react";
import "./Input.css";
import classnamer from "../utils/classnamer";

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
    big: boolean;
    placeholder: string;
    label: string;
}

const classes = ["input"];

const Input: FC<InputProps> = ({big, placeholder, label, className, ...props}) => {
    if (big) {
        classes.push("input_big");
    }
    if (className) {
        classes.push(className)
    }
    return (
        <label>
            {label}
            <input
                className={classnamer(classes)}
                placeholder={placeholder}
                {...props}
            />
        </label>
    );
};

export default Input;
