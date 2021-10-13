import React, {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './Navbar.css';
import {TradeContainer, ChartContainer, Assets} from '../index.js';

const Navbar = () => {

  const [tradingAsset, setTradingAsset] = useState('btcusdt');

  return (
    <div>
      <Tabs defaultActiveKey="trade" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="exchanges" title="Exchanges">
          <Assets changeAsset={setTradingAsset} />
        </Tab>
        <Tab eventKey="trade" title="Trade">
          <ChartContainer asset={tradingAsset} />
          <TradeContainer asset={tradingAsset} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Navbar;