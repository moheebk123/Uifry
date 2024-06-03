import propTypes from "prop-types";
import "./style.css";

const Detail = ({ detail }) => {
  return (
    <div className="detail" data-aos-delay="100" data-aos="fade-down">
      {detail}
    </div>
  );
};

Detail.propTypes = {
  detail: propTypes.string.isRequired,
};

export default Detail;
