import React, {useEffect, useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {AssetDropdown} from '../index';
import './ExchangeContainer.css';

const ExchangeContainer = ({changeAsset, changeExchange}) => {

  const [binanceAssets, setBinanceAssets] = useState(null);
  const [kucoinAssets, setKucoinAssets] = useState(null);
  const [ftxAssets, setFTXAssets] = useState(null);


  useEffect(() => {
    fetchAllBinanceAssets();
    fetchAllFTXAssets();
    fetchAllKucoinAssets();
  }, [])

  const fetchAllBinanceAssets = async () => {
    await fetch("https://api.binance.us/api/v3/exchangeInfo")
      .then(response => response.json())
      .then(data => setBinanceAssets(data.symbols.filter(asset => asset.quoteAsset === 'USDT' || asset.quoteAsset === 'BTC' || asset.quoteAsset === 'USD')))
  }

  const fetchAllKucoinAssets = async () => {
    await fetch("https://enigmatic-bayou-03029.herokuapp.com/https://api.kucoin.com/api/v1/symbols")
      .then(response => response.json())
      .then(data => setKucoinAssets(data.data.filter(asset => asset.quoteCurrency === 'USDT' || asset.quoteCurrency === 'BTC' || asset.quoteCurrency === 'ETH')))
  }

  const fetchAllFTXAssets = async () => {
    await fetch("https://enigmatic-bayou-03029.herokuapp.com/https://ftx.us/api/markets")
      .then(response => response.json())
      .then(data => setFTXAssets(data.result.filter(asset => asset.quoteCurrency === 'USDT' || asset.quoteCurrency === 'BTC' || asset.quoteCurrency === 'USD')))
  }

  const handleAccordionClick = (e) => {
    changeExchange(e.target.innerHTML);
  }


  return (
    <div className="exchange-accordion">
      <Accordion>
        <Accordion.Item eventKey="0" onClick={handleAccordionClick}>
          <Accordion.Header>Binance US</Accordion.Header>
          <Accordion.Body>
          {binanceAssets && <AssetDropdown assetList={binanceAssets} changeAsset={changeAsset} />}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" onClick={handleAccordionClick}>
          <Accordion.Header>Kucoin</Accordion.Header>
          <Accordion.Body>
          {kucoinAssets && <AssetDropdown assetList={kucoinAssets} changeAsset={changeAsset} />}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" onClick={handleAccordionClick}>
          <Accordion.Header>FTX US</Accordion.Header>
          <Accordion.Body>
          {ftxAssets && <AssetDropdown assetList={ftxAssets} changeAsset={changeAsset} />}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )

}

export default ExchangeContainer;