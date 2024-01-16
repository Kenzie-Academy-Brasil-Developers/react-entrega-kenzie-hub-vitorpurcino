import { useContext } from "react";
import { TechCard } from "../index";
import { UserContext } from "../../providers";

export const TechList = ({ setOpenModalEdit }) => {
  const { techs } = useContext(UserContext);

  return (
    <>
      {techs.length > 0 ? (
        techs.map((techs) => (
          <TechCard
            key={techs.id}
            techs={techs}
            setOpenModalEdit={setOpenModalEdit}
          />
        ))
      ) : (
        <h1 className="title one">Sem Tecnologias Cadastradas</h1>
      )}
    </>
  );
};
