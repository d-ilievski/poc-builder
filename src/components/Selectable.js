import React from 'react';

const Selectable = ({ children, active, onClick }) => {
  return (
    <div
      style={{
        border: '2px solid',
        borderColor: active ? 'magenta' : 'transparent',
      }}
      onClick={onClick}>
      {children}
    </div>
  );
};

export default Selectable;
