import { forwardRef } from "react";
import style from "./style.module.scss";

export const Select = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div>
      <label className={style.label}>{label}</label>
      <select ref={ref} {...rest}>
        <option value="">Primeiro Módulo</option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option
          value="Terceiro módulo (Introdução ao
        Backend)"
        >
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </select>
      <p className={style.paragraph}>{error ? error.message : null}</p>
    </div>
  );
});
