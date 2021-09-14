import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './Navbar.css';
import {TradeContainer, ChartContainer, Assets} from '../index.js';

const Navbar = () => {


  return (
    <div>
      <Tabs defaultActiveKey="trade" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="portfolio" title="Portfolio">
          <Assets />
        </Tab>
        <Tab eventKey="trade" title="Trade">
          {/* <ChartContainer /> */}
          <TradeContainer />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Navbar;