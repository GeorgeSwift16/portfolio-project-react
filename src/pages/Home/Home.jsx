import "./Home.scss";
import Header from "../../containers/Header/Header";

import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Home = () => {
  const { themeName } = useContext(ThemeContext);
  console.log(ThemeContext);
  console.log(themeName);

  return (
    <div className="home">
      <Header />
    </div>
  );
};
export default Home;
