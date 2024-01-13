import { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Input, Select } from "../index";
import style from "./style.module.scss";
import { TechContext } from "../../providers/index";
import { MdClose } from "react-icons/md";
import { optionsTech } from "../../data/data";
import { useOutClick } from "../../hooks/useOutClick";
import { useKeyDown } from "../../hooks/useKeyDown";

export const EditTechModal = ({ setOpenModalEdit }) => {
  const { editTech, editingTech } = useContext(TechContext);
  const optionsSelect = optionsTech;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const modalRef = useOutClick(() => {
    setOpenModalEdit(false);
  });

  useKeyDown(() => {
    setOpenModalEdit(false);
  });

  const submit = ({ title, status }) => {
    editTech(status);
    setOpenModalEdit(false);
  };

  return (
    <div className={style.modalOverlay} role="dialog">
      <div ref={modalRef} className={style.modalBox}>
        <div className={style.header}>
          <h1>Tecnologia Detalhes</h1>
          <MdClose size={18} onClick={() => setOpenModalEdit(false)} />
        </div>
        <form onSubmit={handleSubmit(submit)} className={style.form}>
          <Input
            label="Nome"
            type="text"
            id="title"
            value={editingTech.title}
            placeholder="Tecnologia"
            {...register("title")}
            error={errors.title}
            className={style.input}
            disable="true"
          />
          <Select
            label="Selecionar Status"
            name="status"
            id="status"
            error={errors.status}
            {...register("status")}
            className={style.input}
            optionsSelect={optionsSelect}
          />
          <button type="submit" className={style.btn}>
            Salvar Alterações
          </button>
        </form>
      </div>
    </div>
  );
};
