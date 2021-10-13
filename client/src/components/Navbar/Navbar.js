import React, {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './Navbar.css';
import {TradeContainer, ChartContainer, Assets, ExchangeContainer} from '../index.js';

const Navbar = () => {

  const [tradingAsset, setTradingAsset] = useState('btcusdt');
  const [currentExchange, setCurrentExchange] = useState(null);

  return (
    <div>
      <Tabs defaultActiveKey="trade" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="portfolio" title="Portfolio">
          <Assets />
        </Tab>
        <Tab eventKey="trade" title="Trade">
          <ExchangeContainer changeAsset={setTradingAsset} changeExchange={setCurrentExchange} />
          {/* <ChartContainer asset={tradingAsset} /> */}
          <TradeContainer asset={tradingAsset} exchange={currentExchange} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Navbar;