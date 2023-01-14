import { Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
