import { forwardRef } from "react";
import style from "./style.module.scss";

export const Select = forwardRef(
  ({ label, error, optionsSelect, ...rest }, ref) => {
    return (
      <div>
        <label className={style.label}>{label}</label>
        <select ref={ref} {...rest}>
          {optionsSelect ? (
            optionsSelect.map(({ text, value }) => {
              return <option key={value} value={value}>{text}</option>;
            })
          ) : (
            <option>Sem dados</option>
          )}
        </select>
        <p className={style.paragraph}>{error ? error.message : null}</p>
      </div>
    );
  }
);