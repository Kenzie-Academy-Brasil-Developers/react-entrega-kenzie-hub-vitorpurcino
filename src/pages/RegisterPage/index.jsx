import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaRegister } from "./formSchema";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import { apiKenzieHub } from "../../services/apiKenzieHub";
import { toast } from "react-toastify";
import logo from "../../../public/logo.svg";
import style from "./style.module.scss";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaRegister),
  });

  const submit = (formData) => {
    createUser(formData);
  };

  const createUser = async (formData) => {
    console.log(formData.email);
    try {
      const { data } = await apiKenzieHub.post("users", {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        bio: formData.bio,
        contact: formData.contact,
        course_module: formData.course_module,
      });
      toast.success("Cadastro realizado com Sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao realizaro cadastro");
    }
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
        <form onSubmit={handleSubmit(submit)} className={style.form}>
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
            Cadastrar
          </button>
        </form>
      </div>
    </main>
  );
};
