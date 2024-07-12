import React, { ComponentPropsWithoutRef, FC } from "react";
import "./Switcher.css";
import classnamer from "../utils/classnamer";

export interface SwitcherProps extends ComponentPropsWithoutRef<"input"> {
  big: boolean;
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
    }


  return (
    <div className="switcher__wrapper">
      <input
        type="checkbox"
        className="switcher__input"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={classnamer(classes)}
      >
        <div className="switcher__inner" />
      </div>
    </div>
  );
};

export default Switcher;
