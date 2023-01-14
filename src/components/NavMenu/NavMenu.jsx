import "./NavMenu.scss";
import { navigationLinksList } from "../../data/siteInputData.json";

const NavMenu = () => {
  const menuLinks = navigationLinksList.map((element) => (
    <a
      href={`#${element}`}
      className={`navigation-menu__link navigation-menu__link--${element}`}
    >
      {element}
    </a>
  ));
  return <nav className="navigation-menu">{menuLinks}</nav>;
};
export default NavMenu;
