import React from 'react';

const Button = props => {
  return (
    <button
      className={`bg-primaryColor py-2 px-5 rounded-md border-non ${props.mt} ${props.w}`}
    >
      Get Started
    </button>
  );
};

export default Button;
