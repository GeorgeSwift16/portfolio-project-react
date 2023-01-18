import "./Home.scss";
import Header from "../../containers/Header/Header";
import Layout from "../../components/Layout/Layout";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const { themeName } = useContext(ThemeContext);
  console.log(ThemeContext);
  console.log(themeName);

  return (
    <Layout>
      <Banner />
      <Header />
    </Layout>
  );
};
export default Home;
