import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header/header";

function App() {
  const navigate = useNavigate();
  const getItem = localStorage.getItem("token");

  if (getItem && getItem.token) {
    navigate("/courses");
  } else {
    navigate("/");
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
