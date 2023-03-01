import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header/header";

function App() {
  const navigate = useNavigate();
  const getItem = localStorage.getItem("token");

  useEffect(() => {
    if (getItem && JSON.parse(getItem)?.result) {
      navigate("/courses");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
