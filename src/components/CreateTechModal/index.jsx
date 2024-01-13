import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Input, Select } from "../index";
import { TechContext } from "../../providers/index";
import { MdClose } from "react-icons/md";
import { optionsTech } from "../../data/data";
import { useOutClick } from "../../hooks/useOutClick";
import { useKeyDown } from "../../hooks/useKeyDown";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaTech } from "./formSchema";
import style from "./style.module.scss";

export const CreateTechModal = ({ setOpenModalCreate }) => {
  const { createTech } = useContext(TechContext);
  const optionsSelect = optionsTech;

  const modalRef = useOutClick(() => {
    setOpenModalCreate(false);
  });

  useKeyDown(() => {
    setOpenModalCreate(false);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaTech),
  });

  const submit = (formData) => {
    createTech(formData);
    setOpenModalCreate(false);
  };

  return (
    <div className={style.modalOverlay} role="dialog">
      <div ref={modalRef} className={style.modalBox}>
        <div className={style.header}>
          <h1>Cadastrar Tecnologia</h1>
          <MdClose size={18} onClick={() => setOpenModalCreate(false)} />
        </div>
        <form onSubmit={handleSubmit(submit)} className={style.form}>
          <Input
            label="Nome"
            type="text"
            name="title"
            id="title"
            placeholder="Tecnologia"
            {...register("title")}
            error={errors.title}
            className={style.input}
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
            Cadastrar Tecnologia
          </button>
        </form>
      </div>
    </div>
  );
};
