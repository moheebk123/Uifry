import propTypes from "prop-types";

const Link = ({ link, navHome }) => {
  return (
    <h3>
      <a href="#" className={`${navHome ? "navHome" : ""}`}>
        {link}
      </a>
    </h3>
  );
};

Link.propTypes = {
  link: propTypes.string.isRequired,
  navHome: propTypes.bool,
};

export default Link;
