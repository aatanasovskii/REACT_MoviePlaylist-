import React from "react";

const Button = (props) => {
  const { buttonClass, ...restProps } = props;

  return (
    <button className={`button ${buttonClass}`} {...restProps}>
      {props.children}
    </button>
  );
};

export default Button;
