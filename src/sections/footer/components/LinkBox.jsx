import propTypes from "prop-types";

const LinkBox = ({ data }) => {
  return (
    <div className="link-box" data-aos="fade-up" data-aos-delay="200">
      <h1>{data.heading}</h1>
      {data.link.map((link, index) => (
        <p key={index}>{link}</p>
      ))}
    </div>
  );
};

LinkBox.propTypes = {
  data: propTypes.shape().isRequired,
};

export default LinkBox;
