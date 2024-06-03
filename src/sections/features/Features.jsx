import Feature from "../../utils/SectionSubHeadingBox/SectionSubHeadingBox";
import SectionName from "../../utils/SectionName/SectionName";
import SectionHeading from "../../utils/SectionHeading/SectionHeading";
import PhoneOne from "../../assets/phone-one.png";
import BackgroundOne from "../../assets/bg-one.svg";
import RedStar from "../../assets/red-star.svg";
import Hexagon from "../../assets/hexagon.svg";
import Cube from "../../assets/cube.svg";

const Features = () => {
  const features = [
    {
      imgUrl: RedStar,
      subHeading: "Budgeting Intervals",
      detail:
        "Cum Et Convallis Risus Placerat Aliquam, Nuco, Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Socils Arcu Lorem Porttitor.",
    },
    {
      imgUrl: Hexagon,
      subHeading: "Budgeting Intervals",
      detail:
        "Cum Et Convallis Risus Placerat Aliquam, Nuco, Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Socils Arcu Lorem Porttitor.",
    },
    {
      imgUrl: Cube,
      subHeading: "Budgeting Intervals",
      detail:
        "Cum Et Convallis Risus Placerat Aliquam, Nuco, Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Socils Arcu Lorem Porttitor.",
    },
  ];
  return (
    <section className="feature">
      <div className="image-box">
        <img
          className="phone"
          src={PhoneOne}
          alt="Feature Phone"
          data-aos="zoom-in-up"
        />
        <img src={BackgroundOne} alt="Background Image" data-aos="zoom-in" />
      </div>
      <div className="content">
        <SectionName name="Features" />
        <SectionHeading name="Uifry Premium" />
        {features.map((feature, index) => {
          return (
            <Feature
              key={index}
              imgUrl={feature.imgUrl}
              subHeading={feature.subHeading}
              detail={feature.detail}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Features;
