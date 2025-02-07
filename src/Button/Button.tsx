import React, {ComponentPropsWithRef} from "react";
import styles from "./Button.module.css";
import {classnamer} from "../shared/lib";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
    big?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {big = false, className, children, onClick, ref, ...rest} = props;
    return (
        <button
            className={classnamer([
                styles.button,
                big && styles.button__big,
                className,
            ])}
            onClick={onClick}
            {...rest}
            ref={ref}
        >
            {children}
        </button>
    );
};
