// import ThemeContext from "../../context/ThemeContext";
// import { useContext } from "react";
import "./HeroSection.scss";

// const { theme } = useContext(ThemeContext);
// console.log(theme);
const HeroSection = () => {
  return (
    <div className="header">
      <h2 className="header__subheading">
        Hey I&apos;m
        <span className="header__subheading highlighted-text">
          {" "}
          George Swift
        </span>
      </h2>
      <h1 className="header__heading">
        A Trainee{" "}
        <span className="header__heading highlighted-text">
          Software Developer{" "}
        </span>
        based in Bristol.
      </h1>
    </div>
  );
};
export default HeroSection;
