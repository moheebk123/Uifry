import propTypes from "prop-types";
import "./style.css";

const Button = ({ text, imgUrl }) => {
  if (imgUrl === undefined) {
    return <button>{text}</button>;
  } else {
    return (
      <button>
        {text}
        <img src={imgUrl} alt="Right Arrow" />
      </button>
    );
  }
};

Button.propTypes = {
  text: propTypes.string.isRequired,
  imgUrl: propTypes.string,
};

export default Button;
