import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import logo from "../../../public/logo.svg";

export const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate();

  const logout = () => {
    setUser([]);
    localStorage.removeItem("@TokenKenzieHub");
    navigate("/");
  };

  return (
    <main className={style.container}>
      <div className={style.containerDashboard}>
        <div className={style.boxOne}>
          <img src={logo} alt="Logo Kenzie Hub" />
          <button className="btn small" onClick={logout}>
            Sair
          </button>{" "}
        </div>
        <div className={style.boxTwo}>
          <h1 className="title one">Olá,{user.name}</h1>
          <span className="title headline">{user.course_module}</span>
        </div>
        <div className={style.boxThree}>
          <h1 className="title one">
            Que pena! Estamos em desenvolvimento :({" "}
          </h1>
          <h2 className="title paragraph">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </h2>
        </div>
      </div>
    </main>
  );
};
