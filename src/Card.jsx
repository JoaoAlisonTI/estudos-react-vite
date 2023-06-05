import React from 'react';

const Card = ({ quantidade }) => {
  let backgroundColor;

  if (quantidade === 0) {
    backgroundColor = 'red';
  } else if (quantidade === 1) {
    backgroundColor = 'yellow';
  } else {
    backgroundColor = 'green';
  }

  return (
    <div style={{ backgroundColor }}>
      <h2>Meu card dinamico</h2>
    </div>
  );
};

export default Card;