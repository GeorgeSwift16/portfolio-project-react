import "./Home.scss";
import Header from "../../containers/Header/Header";
import Layout from "../../components/Layout/Layout";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
const Home = () => {
  const { themeName } = useContext(ThemeContext);
  console.log(ThemeContext);
  console.log(themeName);

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
