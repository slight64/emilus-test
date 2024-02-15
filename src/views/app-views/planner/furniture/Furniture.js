import React from 'react';

const Furniture = ({ type, handleClick }) => {
  let style = {};
  switch (type) {
    case 'chair':
      console.log(1);
      style = {
        backgroundColor: '#d1d8dd',
        width: '30px',
        height: '30px',
      };
      break;
    case 'table':
      style = {
        backgroundColor: '#dfffff',
        width: '30px',
        height: '30px',
      };
      break;
    default:
      style = {
        backgroundColor: '#ddd',
        width: '30px',
        height: '30px',
      };
      break;
  }

  return (
    <div onClick={handleClick} style={style}>
      {type}
    </div>
  );
};

export default Furniture;
