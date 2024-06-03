import SectionName from "../../utils/SectionName/SectionName";
import SectionHeading from "../../utils/SectionHeading/SectionHeading";
import Advantage from "../../utils/SectionSubHeadingBox/SectionSubHeadingBox";
import DebitCard from "./components/DebitCard/DebitCard"
import PhoneTwo from "../../assets/phone-two.png";
import PhoneOne from "../../assets/phone-one.png";
import BackgroundTwo from "../../assets/bg-two.png";
import BackgroundOne from "../../assets/bg-one.svg";
import RedCircleStar from "../../assets/red-circle-star.svg";
import Notification from "../../assets/notification.svg";
import ActivityCard from "./components/ActivityCard/ActivityCard";

const Advantages = () => {
  const advantage = {
    subHeading: "Clever Notifications",
    detail:
      "Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultricles. In Ultrices Malesuade Elit Mauris Etiam Odio. Duis Taristique Lacus, Et Blandit Viverra Nisl Velit, Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Du. Lectus Eget Eget Ac Dolor Naque Lorem Saplen, Suspendisse Aliquam.",
  };
  return (
    <>
      <section className="advantage">
        <div className="content">
          <SectionName name="Advantages" />
          <SectionHeading name="Why Choose Uifry?" />
          <Advantage
            imgUrl={Notification}
            subHeading={advantage.subHeading}
            detail={advantage.detail}
          />
        </div>
        <div className="image-box">
          <img
            className="phone"
            src={PhoneTwo}
            alt="Advantage Phone"
            data-aos="zoom-in-up"
          />
          <img src={BackgroundTwo} alt="Background Image" data-aos="zoom-in" />
          <ActivityCard />
        </div>
      </section>
      <section className="advantage">
        <div className="image-box">
          <img
            className="phone"
            src={PhoneOne}
            alt="Advantage Phone"
            data-aos="zoom-in-up"
          />
          <img src={BackgroundOne} alt="Background Image" data-aos="zoom-in" />
          <DebitCard />
        </div>
        <div className="content">
          <Advantage
            imgUrl={RedCircleStar}
            subHeading={advantage.subHeading}
            detail={advantage.detail}
          />
        </div>
      </section>
    </>
  );
};

export default Advantages;
