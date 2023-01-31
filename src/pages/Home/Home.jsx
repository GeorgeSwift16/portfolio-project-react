import "./Home.scss";
import Header from "../../containers/Header/Header";

import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const { themeName } = useContext(ThemeContext);
  console.log(ThemeContext);
  console.log(themeName);

  return (
    <>
      <Banner />
      <Header />
    </>
  );
};
export default Home;
