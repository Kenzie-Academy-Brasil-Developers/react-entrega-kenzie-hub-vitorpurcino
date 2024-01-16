import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiKenzieHub } from "../services/apiKenzieHub";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [techs, setTechs] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("@TokenKenzieHub");
  const pathName = window.location.pathname;

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          setLoading(true);
          const { data } = await apiKenzieHub.get("profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          navigate(pathName);
        } catch (error) {
          console.log(error);
          logout();
        } finally {
          setLoading(false);
        }
      }
    };
    if (token) {
      loadUser();
    }
  }, []);

  const login = async (formData, reset, setLoading) => {
    const { email, password } = formData;
    try {
      setLoading(true);

      const { data } = await apiKenzieHub.post("sessions", {
        email: email,
        password: password,
      });
      localStorage.setItem("@TokenKenzieHub", data.token);
      setUser(data.user);
      setTechs(data.user.techs)
      navigate("/dashboard");
      reset();
    } catch (error) {
      if (error.request.status === 401) {
        toast.error("Senha Incorreta");
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("@TokenKenzieHub");
    navigate("/");
  };

  const createUser = async (formData, reset, setLoading) => {
    try {
      setLoading(true);
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
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Erro ao realizaro cadastro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        createUser,
        loading,
        techs,
        setTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
