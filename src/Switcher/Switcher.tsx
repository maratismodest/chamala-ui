import React, {ComponentPropsWithoutRef, FC} from "react";
import styles from "./Switcher.module.css";

export interface SwitcherProps extends ComponentPropsWithoutRef<"input"> {
  big: boolean;
  label: string;
}

const Switcher: FC<SwitcherProps> = ({
                                      big,
                                      placeholder,
                                      label,
                                      checked,
                                      onChange,
                                      ...props
                                    }) => {

  return (
    <div className={styles.switcher__wrapper}>
      <input
        type="checkbox"
        className={styles.switcher__input}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <div
        className={styles.switcher}
        style={{
          justifyContent: checked ? "end" : "initial",
        }}
      >
        <div className={styles.switcher__inner}/>
      </div>
    </div>
  );
};

export default Switcher;
