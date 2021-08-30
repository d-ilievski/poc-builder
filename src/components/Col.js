import React from 'react';

const Col = ({ children, size /*tabletSize, mobileSize*/ }) => {
  return <div className={`col-${size}`}>{children}</div>;
};

export default Col;
