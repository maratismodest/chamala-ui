import React, {ComponentPropsWithRef} from "react";
import styles from "./Input.module.css";
import {classnamer} from "../shared/lib";

export interface InputProps extends ComponentPropsWithRef<"input"> {
    big?: boolean;
    label?: string;
}

export const Input: React.FC<InputProps> = (props) => {
    const {
        big,
        className,
        children,
        onChange,
        ref,
        value,
        placeholder,
        label,
        ...rest
    } = props;
    return (
        <label className={styles.label}>
            {label && <span className='span'>{label}</span>}
            <input
                className={classnamer([
                    styles.input,
                    big && styles.input__big,
                    className,
                ])}
                onChange={onChange}
                placeholder={placeholder}
                ref={ref}
                value={value}
                {...rest}
            />
        </label>
    );
};
