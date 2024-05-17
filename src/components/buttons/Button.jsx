import React from "react";

const Button = ({ text, onclick, loading }) => {
  return (
    <button
    disabled={loading}
      onClick={onclick}
      
    >
      {text}
    </button>
  );
};

export default Button;
