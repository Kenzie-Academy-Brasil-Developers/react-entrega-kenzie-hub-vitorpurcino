import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes/RoutesMain";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.min.css";
import { useContext } from "react";
import { Spinner } from "react-loading-io";
import { UserContext } from "./providers/index";

const App = () => {
  const { loading } = useContext(UserContext);
  const spinnerCfg = {left: "40%", transform: "translateY(100%)"}
  return (
    <>
      {loading ? <Spinner style={spinnerCfg} /> : <RoutesMain />}
      <ToastContainer autoClose={3000} />
    </>
  );
};
export default App;
