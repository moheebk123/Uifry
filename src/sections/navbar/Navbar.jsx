import Button from "../../utils/Button/Button";
import Links from "./components/Links";
import Logo from "./components/Logo";
import Bar from "../../assets/bar.png";
import "./style.css";

const Navbar = () => {
  return (
    <nav data-aos="zoom-in">
      <div className="menu-box">
        <Logo />
        <Links />
      </div>
      <img src={Bar} alt="Menu Icon" />
      <Button text="Download" />
    </nav>
  );
};

export default Navbar;
