import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes/RoutesMain";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <>
      <RoutesMain />
      <ToastContainer autoClose={3000} />
    </>
  );
};
export default App;
