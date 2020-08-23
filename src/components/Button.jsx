import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onCLick, color, align }) => {
  const className = [
    "header-btn",
    color === "black" && "main-black-color",
    color === "red" && "main-red-color",
    align === "left" && "align-left",
    align === "right" && "align-right"
  ].join(" ");

  return (
    <button className={className} onClick={onCLick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onCLick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"])
};

export default Button;