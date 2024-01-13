import { useContext } from "react";
import { TechContext } from "../../providers";
import { TechCard } from "../index";

export const TechList = ({ setOpenModalEdit }) => {
  const { techs } = useContext(TechContext);

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
