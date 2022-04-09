import React from 'react';
import Button from '../button/button';
import './game-buy.css';
const GameBuy = ({ game }) => {
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} сом.</span>

      <Button
      onClick={() => null}
      type='primary'
      >

      </Button>
    </div>
  );
};

export default GameBuy;
