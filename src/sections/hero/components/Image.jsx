import BgTwo from "../../../assets/bg-two.png";
import Phone1 from "../../../assets/phone1.png";
import Phone2 from "../../../assets/phone2.png";
import BlackCircleLayer from "../../../assets/black-circle-layer.svg";

const Image = () => {
  return (
    <div className="image-box">
      <img
        className="background"
        src={BgTwo}
        alt="Background Image"
        data-aos="zoom-in"
      />
      <img
        className="circle-layer"
        src={BlackCircleLayer}
        alt="Background Circle Layer Image"
        data-aos="zoom-in-up"
      />
      <img
        className="phone phone-one"
        src={Phone1}
        alt="Phone Image"
        data-aos="fade-up-left"
      />
      <img
        className="phone phone-two"
        src={Phone2}
        alt="Phone Image"
        data-aos="fade-up-left"
        data-aos-delay="100"
      />
      <img
        className="phone phone-three"
        src={Phone1}
        alt="Phone Image"
        data-aos="fade-up-left"
        data-aos-delay="200"
      />
    </div>
  );
};

export default Image;
