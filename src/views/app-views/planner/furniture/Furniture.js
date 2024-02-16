import React from 'react';
import chair from '../assets/chair.svg';
import table from '../assets/table.svg';

const Furniture = ({ type, handleClick }) => {
  let style = {};
  let svg = '';
  switch (type) {
    case 'chair':
      style = {
        width: '25px',
        height: '25px',
      };
      svg = chair;
      break;
    case 'table':
      style = {
        width: '30px',
        height: '30px',
      };
      svg = table;
      break;
    case 'big-table':
      style = {
        width: '30px',
        height: '60px',
      };
      svg = table;
      break;
    default:
      style = {
        width: '30px',
        height: '30px',
      };
      break;
  }

  return (
    <div onClick={handleClick} style={style}>
      <img src={svg} />
    </div>
  );
};

export default Furniture;
