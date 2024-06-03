import Detail from "../../utils/Detail/Detail";
import logo from "../../assets/logo.svg";
import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import "./style.css";
import LinkBox from "./components/LinkBox";
import Button from "../../utils/Button/Button";

const Footer = () => {
  const copyRight = "Copyright 2022 Uifry.com All Rights Reserved";

  const links = [
    {
      heading: "Links",
      link: ["Home", "About Us", "Bookings", "Blog"],
    },
    {
      heading: "Legal",
      link: ["Terms Of Use", "Privacy Policy", "Cookie Policy"],
    },
    {
      heading: "Product",
      link: ["Take Tour", "Live Chat", "Reviews"],
    },
  ];

  return (
    <footer>
      <div className="container">
        <div className="link-box" data-aos="fade-up" data-aos-delay="200">
          <div className="logo-box">
            <img src={logo} alt="Brand Logo" />
            <h2>
              uifry<span>IN</span>
            </h2>
          </div>
          <div className="logo-box">
            <img src={email} alt="Email Logo" />
            <p>Help@Frybix.com</p>
          </div>
          <div className="logo-box">
            <img src={phone} alt="Phone Logo" />
            <p>+1234 456 678 89</p>
          </div>
        </div>
        {links.map((linkData, index) => {
          return <LinkBox key={index} data={linkData} />;
        })}
        <div className="link-box" data-aos="fade-up" data-aos-delay="200">
          <h1>Newsletter</h1>
          <p>Stay Up To Date</p>
          <div className="subscription-box">
            <input type="email" placeholder="Your email" required />
            <Button text="Subscribe" />
          </div>
        </div>
      </div>
      <Detail detail={copyRight} />
    </footer>
  );
};

export default Footer;
