import { useContext } from "react";
import { TechContext } from "../../providers";
import { MdCreate, MdDelete } from "react-icons/md";
import style from "./style.module.scss";

export const TechCard = ({ techs, setOpenModalEdit }) => {
  const { deleteTech, setEditingTech } = useContext(TechContext);

  const techEdit = (techEdit) => {
    setEditingTech(techEdit);
    setOpenModalEdit(true);
  };

  return (
    <li className={style.cardTech}>
      <div>
        <h2>{techs.title}</h2>
      </div>
      <div className={style.cardDescription}>
        <h3 className="title">{techs.status}</h3>
        <div>
          <MdCreate onClick={() => techEdit(techs)} />
          <MdDelete onClick={() => deleteTech(techs.id)} />
        </div>
      </div>
    </li>
  );
};
