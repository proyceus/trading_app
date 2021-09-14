import React from 'react';
import './TradeContainer.css';
import Button from 'react-bootstrap/Button';

const TradeContainer = () => {


  return (
    <div className="trade-container">
        <div className="amounts">Amount: 10,000</div>
        <div className="amounts">Amount: 5,000</div>
      <div className="break"></div>
      <input type="text" placeholder="price"></input>
      <input type="text" placeholder="amount"></input>
      <div className="break"></div>
      <Button variant="success" size="lg" className="trade-button">Buy</Button>
      <Button variant="danger" size="lg" className="trade-button">Sell</Button>
    </div>
  )
}

export default TradeContainer;