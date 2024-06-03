import Detail from "../../utils/Detail/Detail";
import Button from "../../utils/Button/Button";
import SectionHeading from "../../utils/SectionHeading/SectionHeading";
import apple from "../../assets/apple-logo.svg";
import bgOne from "../../assets/bg-one.svg";
import phones from "../../assets/phones.png";
import whiteCircleLayer from "../../assets/white-circle-layer.svg";
import "./style.css";

const GetStarted = () => {
  const data =
    "Risus Habitant Loc Egestas Mauris Diam Eget Morbi Tempus Vulputatc.";

  return (
    <section className="get-started">
      <img className="bg-one" src={bgOne} alt="Background Image" />
      <div className="content">
        <SectionHeading name="Ready To Get Started?" />
        <Detail detail={data} />
        <Button text="Download App" imgUrl={apple} />
        <img
          className="white-circle-layer"
          src={whiteCircleLayer}
          alt="White Circle Layer"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        />
      </div>
      <div className="image">
        <img
          className="phones"
          src={phones}
          alt="Phones Image"
          data-aos="fade-up-left"
          data-aos-delay="600"
        />
        <img
          className="white-circle-layer"
          src={whiteCircleLayer}
          alt="White Circle Layer"
          data-aos="zoom-in-down"
          data-aos-delay="300"
        />
      </div>
    </section>
  );
};

export default GetStarted;
