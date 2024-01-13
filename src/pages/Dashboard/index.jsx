import style from "./style.module.scss";
import logo from "../../../public/logo.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/index";
import {
  CreateTechModal,
  EditTechModal,
  TechList,
} from "../../components/index";
import { MdAdd } from "react-icons/md";

export const Dashboard = () => {
  const { user, logout } = useContext(UserContext);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

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
          <h1 className="title one">Olá, {user.name}</h1>
          <span className="title headline">{user.course_module}</span>
        </div>

        <div className={style.boxThree}>
          <div className={style.boxThreeTitle}>
            <h1 className="title two">Tecnologias</h1>
            <MdAdd onClick={() => setOpenModalCreate(true)} />
          </div>

          <ul className={style.boxThreeList}>
            <TechList
              setOpenModalCreate={setOpenModalCreate}
              setOpenModalEdit={setOpenModalEdit}
            />
          </ul>

          {openModalCreate ? (
            <CreateTechModal
              setOpenModalCreate={setOpenModalCreate}
            ></CreateTechModal>
          ) : null}

          {openModalEdit ? (
            <EditTechModal setOpenModalEdit={setOpenModalEdit}></EditTechModal>
          ) : null}
        </div>
      </div>
    </main>
  );
};
