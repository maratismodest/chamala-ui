import React, {ComponentPropsWithRef, FC} from "react";
import {classnamer} from "../shared/lib";
import styles from "./Switcher.module.css";

export interface SwitcherProps extends ComponentPropsWithRef<"input"> {
}

export const Switcher: FC<SwitcherProps> = ({
                                                checked,
                                                onChange,
                                                ref,
                                                ...props
                                            }) => {
    return (
        <label className={styles.switcher__wrapper}>
            <input
                type="checkbox"
                className={styles.switcher__input}
                checked={checked}
                onChange={onChange}
                ref={ref}
                {...props}
            />
            <div
                className={classnamer([
                    styles.switcher,
                    checked && styles.switcher_checked,
                ])}
            >
                <div className={styles.switcher__inner}/>
            </div>
        </label>
    );
};
