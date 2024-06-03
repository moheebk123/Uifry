import propTypes from "prop-types";
import Detail from "../Detail/Detail";
import SectionSubHeading from "../SectionSubHeading/SectionSubHeading";
import "./style.css";

const SectionSubHeadingBox = ({ imgUrl, subHeading, detail }) => {
  return (
    <div className="sub-heading-box" data-aos="fade-down" data-aos-delay="50">
      <div className="sub-heading">
        {imgUrl !== undefined ? (
          <img src={imgUrl} alt="Sub Heading Icon" />
        ) : (
          <></>
        )}
        <SectionSubHeading name={subHeading} />
      </div>
      <Detail detail={detail} />
    </div>
  );
};

SectionSubHeadingBox.propTypes = {
  imgUrl: propTypes.string,
  subHeading: propTypes.string.isRequired,
  detail: propTypes.string.isRequired,
};

export default SectionSubHeadingBox;
