import { createContext, useContext, useState } from "react";
import { apiKenzieHub } from "../services/apiKenzieHub";
import { toast } from "react-toastify";
import { UserContext } from "./index";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { techs, setTechs } = useContext(UserContext);
  const [editingTech, setEditingTech] = useState(null);
  const token = localStorage.getItem("@TokenKenzieHub");

  const createTech = async (tecnology) => {
    try {
      const { data } = await apiKenzieHub.post("users/techs", tecnology, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechs([...techs, data]);
      toast.success("Tecnologia Cadastrada");
    } catch (error) {
      if (error.response.data.status === "error") {
        toast.error("Tecnologia já Cadastrada");
      } else {
        console.log(error);
      }
    }
  };

  const editTech = async (status) => {
    const idTech = editingTech.id;
    try {
      const { data } = await apiKenzieHub.put(
        `users/techs/${idTech}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newTechList = techs.filter((element) => element.id !== data.id);
      newTechList.push(data);
      const newTechList2 = newTechList.flat()
      setTechs(newTechList);
      setEditingTech(null);
      toast.success("Tecnologia Editada");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTech = async (techId) => {
    try {
      await apiKenzieHub.delete(`users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechList = techs.filter((element) => element.id !== techId);
      setTechs(newTechList);
      toast.success("Tecnologia Deletada");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        createTech,
        editTech,
        deleteTech,
        editingTech,
        setEditingTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
