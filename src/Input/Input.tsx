import React, {ComponentPropsWithoutRef, FC} from "react";
import "./Input.css";
import classnamer from "../utils/classnamer";

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
    big?: boolean;
    placeholder: string;
    label: string;
}

const Input: FC<InputProps> = ({big = false, placeholder, label, className, ...props}) => {
    const classes = ["input"];
    if (big) {
        classes.push("input_big");
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
