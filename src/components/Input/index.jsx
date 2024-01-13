import { forwardRef } from "react";
import style from "./style.module.scss";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div>
      <label className={style.label} >{label}</label>
      <br />
      <input ref={ref} {...rest} />
      <p className={style.paragraph}>{error ? error.message : null}</p>
    </div>
  );
});
