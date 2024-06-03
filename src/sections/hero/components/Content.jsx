import Detail from "../../../utils/Detail/Detail";
import Button from "../../../utils/Button/Button";
import RightArrow from "../../../assets/arrow-right.svg";
import Play from "../../../assets/play-button.svg";
import BackgroundOne from "../../../assets/bg-one.svg";
import Ribbon from "./Ribbon";

const Content = () => {
  const data =
    "Cum Et Convallis Risus Placerat Aliquam, Nuco, Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Socils Arcu Lorem Porttitor.";

  return (
    <div className="content-box">
      <img className="background" src={BackgroundOne} alt="Background Image" />
      <h1 data-aos="fade-down">
        Make The Best
        <br />
        Financial Decisions
      </h1>
      <Detail detail={data} />
      <div className="button-box" data-aos="fade-down" data-aos-delay="200">
        <Button text="Get Started" imgUrl={RightArrow} />
        <button className="watch-btn">
          <img src={Play} alt="Play Icon" />
          <div>Watch Video</div>
        </button>
      </div>
      <Ribbon />
    </div>
  );
};

export default Content;
