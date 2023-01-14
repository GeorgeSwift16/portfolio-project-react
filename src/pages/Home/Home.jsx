import "./Home.scss";
import Header from "../../containers/Header/Header";
import Layout from "../../components/Layout/Layout";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(ThemeContext);
  console.log(theme);
  setTheme("light");
  console.log(ThemeContext);
  console.log(theme);
  return (
    <Layout>
      <div className="home">
        <Header />
        <p>hello there sir</p>
      </div>
    </Layout>
  );
};
export default Home;
