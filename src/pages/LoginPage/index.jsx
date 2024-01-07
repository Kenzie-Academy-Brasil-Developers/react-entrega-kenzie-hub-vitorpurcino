import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaLogin } from "./formSchema";
import { useContext } from "react";
import { LoginContext } from "../../providers/LoginContext";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import logo from "../../../public/logo.svg";
import style from "./style.module.scss";

export const LoginPage = () => {
  const { submitLogin } = useContext(LoginContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaLogin),
  });

  return (
    <main className="container">
      <div className={style.container}>
        <div className={style.boxLogo}>
          <img src={logo} alt="Logo Kenzie Hub" />
        </div>
        <Form onSubmit={handleSubmit(submitLogin)} className={style.form}>
          <h1>Login</h1>

          <Input
            label={"E-mail"}
            type="text"
            id="email"
            placeholder="informe seu e-mail"
            {...register("email")}
            error={errors.email}
            className="input"
          />

          <Input
            label={"Senha"}
            type="password"
            id="password"
            placeholder="informe sua senha"
            {...register("password")}
            error={errors.password}
            className="input"
          />

          <button type="submit" className="btn toEnter">
            Entrar
          </button>
          <span className={style.span}>Ainda não possui uma conta?</span>
          <Link to="/register">
            <button className="btn register">Cadastre-se</button>
          </Link>
        </Form>
      </div>
    </main>
  );
};
