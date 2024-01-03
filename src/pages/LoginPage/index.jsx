import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiKenzieHub } from "../../services/apiKenzieHub";
import { formSchemaLogin } from "./formSchema";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import logo from "../../../public/logo.svg";
import style from "./style.module.scss";

export const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();
  const screenWidth = window.screen.width;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaLogin),
  });

  const submit = (formData) => {
    login(formData);
  };

  const login = async ({ email, password }) => {
    try {
      const { data } = await apiKenzieHub.post("sessions", {
        email: email,
        password: password,
      });
      localStorage.setItem("@TokenKenzieHub", data.token);
      setUser(data.user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="container">
      <div className={style.container}>
        <div className={style.boxLogo}>
          <img src={logo} alt="Logo Kenzie Hub" />
        </div>
        <Form onSubmit={handleSubmit(submit)} className={style.form}>
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
