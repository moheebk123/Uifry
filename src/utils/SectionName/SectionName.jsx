import propTypes from "prop-types";
import "./style.css";

const SectionName = ({ name }) => {
  return (
    <h3 className="section-name" data-aos="fade-down">
      {name}
    </h3>
  );
};

SectionName.propTypes = {
  name: propTypes.string.isRequired,
};

export default SectionName;
