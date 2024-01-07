import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaRegister } from "./formSchema";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import { useContext, useState } from "react";
import { LoginContext } from "../../providers/LoginContext";
import logo from "../../../public/logo.svg";
import style from "./style.module.scss";

export const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const { createUser } = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaRegister),
  });

  const submitCreate = (formData) => {
    createUser(formData, reset, setLoading);
  };

  return (
    <main className={style.container}>
      <div className={style.containerRegister}>
        <div className={style.boxLogo}>
          <img src={logo} alt="Logo Kenzie Hub" />
          <Link to="/">
            <button className="btn small">Voltar</button>
          </Link>
        </div>
        <form onSubmit={handleSubmit(submitCreate)} className={style.form}>
          <h1>Crie sua Conta</h1>
          <span className={style.span}>Rápido e grátis, vamo nessa</span>
          <Input
            label="Nome"
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
            error={errors.name}
            className="input"
          />
          <Input
            label="E-mail"
            type="text"
            id="email"
            placeholder="Digite aqui seu e-mail"
            {...register("email")}
            error={errors.email}
            className="input"
          />
          <Input
            label="Senha"
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
            error={errors.password}
            className="input"
          />
          <Input
            label="Confirmar Senha"
            type="password"
            id="confirmPassword"
            placeholder="Confirmar senha"
            {...register("confirmPassword")}
            error={errors.confirmPassword}
            className="input"
          />
          <Input
            label="Bio"
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
            error={errors.bio}
            className="input"
          />
          <Input
            label="Contato"
            type="text"
            id="contact"
            placeholder="Opção de Contato"
            {...register("contact")}
            error={errors.contact}
            className="input"
          />
          <Select
            label="Selecionar Módulo"
            name="course_module"
            id="course_module"
            error={errors.course_module}
            {...register("course_module")}
            className="input"
          />
          <button type="submit" className="btn registerTwo">
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
      </div>
    </main>
  );
};
