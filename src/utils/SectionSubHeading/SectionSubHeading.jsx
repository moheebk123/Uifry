import propTypes from "prop-types";
import "./style.css";

const SectionSubHeading = ({ name }) => {
  return (
    <h3 className="section-sub-heading" data-aos="fade-down">
      {name}
    </h3>
  );
};

SectionSubHeading.propTypes = {
  name: propTypes.string.isRequired,
};

export default SectionSubHeading;
