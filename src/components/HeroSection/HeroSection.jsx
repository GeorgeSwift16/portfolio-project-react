// import ThemeContext from "../../context/ThemeContext";
// import { useContext } from "react";
import "./HeroSection.scss";

// const { theme } = useContext(ThemeContext);
// console.log(theme);
const HeroSection = () => {
  return (
    <div className="hero-section">
      <h2 className="hero-section__subheading">
        👋 Hey I&apos;m{" "}
        <span className="hero-section__subheading highlighted-text">
          George Swift!
        </span>
      </h2>
      <h1 className="hero-section__heading">
        A Trainee{" "}
        <span className="hero-section__heading highlighted-text">
          Software Developer
        </span>{" "}
        based in Bristol.
      </h1>
    </div>
  );
};
export default HeroSection;
