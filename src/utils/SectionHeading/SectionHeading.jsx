import propTypes from "prop-types";
import "./style.css";

const SectionHeading = ({ name }) => {
  return (
    <h1 className="section-heading" data-aos="fade-down">
      {name}
    </h1>
  );
};

SectionHeading.propTypes = {
  name: propTypes.string.isRequired,
};

export default SectionHeading;
