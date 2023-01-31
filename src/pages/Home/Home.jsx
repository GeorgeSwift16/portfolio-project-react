import "./Home.scss";
import Header from "../../containers/Header/Header";

import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Home = () => {
  const { themeName } = useContext(ThemeContext);
  console.log(ThemeContext);
  console.log(themeName);

  return (
    <>
      <Header />
    </>
  );
};
export default Home;
