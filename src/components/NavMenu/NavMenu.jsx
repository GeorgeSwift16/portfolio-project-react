import "./NavMenu.scss";
import siteData from "../../data/siteInputData.js";

const NavMenu = () => {
  const { navigationLinksList } = siteData;
  console.log(navigationLinksList);
  const menuLinks = navigationLinksList.map((element, index) => (
    <a
      key={index}
      href={`#${element}`}
      // placeholder href - to update with react router link
      className={`navigation-menu__link navigation-menu__link--${element}`}
    >
      {element}
    </a>
  ));
  return <nav className="navigation-menu">{menuLinks}</nav>;
};
export default NavMenu;
