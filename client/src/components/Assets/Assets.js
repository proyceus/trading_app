import { useState, useEffect } from 'react';
import {AssetDropdown} from '../index.js';


const Assets = ({changeAsset}) => {

  const [binanceAssets, setBinanceAssets] = useState(null);
  const [kucoinAssets, setKucoinAssets] = useState(null);
  const [ftxAssets, setFTXAssets] = useState(null);

  useEffect(() => {
    // fetchAllBinanceAssets();
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

  return (
    <div>
      <h1>Binance Assets</h1>
      <button onClick={fetchAllBinanceAssets}>Get list of Binance pairs</button>
      {binanceAssets && <AssetDropdown assetList={binanceAssets} changeAsset={changeAsset} />}
      <h1>Kucoin Assets</h1>
      <button onClick={fetchAllKucoinAssets}>Get list of Kucoin pairs</button>
      {kucoinAssets && <AssetDropdown assetList={kucoinAssets} changeAsset={changeAsset} />}
      <h1>FTX.US Assets</h1>
      <button onClick={fetchAllFTXAssets}>Get list of FTX pairs</button>
      {ftxAssets && <AssetDropdown assetList={ftxAssets} changeAsset={changeAsset} />}
    </div>
  )
}

export default Assets;