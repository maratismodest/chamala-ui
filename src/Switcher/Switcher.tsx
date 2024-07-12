import React, {ComponentPropsWithoutRef, FC} from "react";
import "./Switcher.css";
import classnamer from "../utils/classnamer";

export interface SwitcherProps extends ComponentPropsWithoutRef<"input"> {
    big?: boolean;
    label: string;
}

const classes = ['switcher'];

const Switcher: FC<SwitcherProps> = ({
                                         big,
                                         placeholder,
                                         label,
                                         checked,
                                         onChange,
                                         ...props
                                     }) => {
    if (checked) {
        classes.push("switcher_checked");
    } else {
        const index = classes.indexOf("switcher_checked");
        if (index > -1) { // only splice array when item is found
            classes.splice(index, 1)
        }
    }


    return (
        <div className="switcher__wrapper">
            <input
                type="checkbox"
                className="switcher__input"
                checked={checked}
                onChange={onChange}
                {...props}
            />
            <div
                className={classnamer(classes)}
            >
                <div className="switcher__inner"/>
            </div>
        </div>
    );
};

export default Switcher;
