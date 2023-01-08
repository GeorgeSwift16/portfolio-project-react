import "./Banner.scss";
import NavMenu from "../NavMenu/NavMenu";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__title-container">
        <h1 className="banner__heading">George Swift</h1>
      </div>
      <div className="banner__menu-container">
        <NavMenu />
      </div>
    </div>
  );
};
export default Banner;
