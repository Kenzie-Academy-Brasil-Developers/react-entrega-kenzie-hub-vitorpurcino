import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiKenzieHub } from "../services/apiKenzieHub";
import { toast } from "react-toastify";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TokenKenzieHub");

      if (token) {
        try {
          const { data } = await apiKenzieHub.get("profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
          logout();
        }
      }
    };
    loadUser();
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
      navigate("/dashboard");
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser([]);
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
    <LoginContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        createUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
