import React, { ComponentPropsWithoutRef, FC } from "react";
import "./MySwitcher.css";

export interface MyInputProps extends ComponentPropsWithoutRef<"input"> {
  big: boolean;
  placeholder: string;
  label: string;
}

const MySwitcher: FC<MyInputProps> = ({
  big,
  placeholder,
  label,
  checked,
  onChange,
  ...props
}) => {
  const classes = ["my-input"];
  if (big) {
    classes.push("big-input");
  }

  // return (
  //   <label>
  //     {label}
  //     <input
  //       className={classes.join(" ")}
  //       placeholder={placeholder}
  //       {...props}
  //     />
  //   </label>
  // );

  return (
    <div className="switcher__wrapper">
      <input
        type="checkbox"
        className="switcher__input"
        checked={checked}
        onChange={onChange}
      />
      <div
        className="switcher"
        style={{
          justifyContent: checked ? "end" : "initial",
        }}
      >
        <div className="switcher__inner" />
      </div>
    </div>
  );
};

export default MySwitcher;
