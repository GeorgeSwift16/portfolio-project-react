import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h2 className="header__greeting">
        Hey I'm
        <span className="header__greeting highlighted-text"> George Swift</span>
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
export default Header;
