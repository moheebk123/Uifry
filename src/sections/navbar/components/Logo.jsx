import logo from "../../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="logo-box">
      <img src={logo} alt="Brand Logo" />
      <h2>
        uifry<span>IN</span>
      </h2>
    </div>
  );
};

export default Logo;
