import { useState, useEffect } from 'react';
import {AssetDropdown} from '../index.js';


const Assets = () => {

  const [binanceAssets, setBinanceAssets] = useState(null);

  useEffect(() => {
    // fetchAllBinanceAssets();
  }, [])

  const fetchAllBinanceAssets = async () => {
    await fetch("https://api.binance.com/api/v3/exchangeInfo")
      .then(response => response.json())
      .then(data => setBinanceAssets(data.symbols.filter(asset => asset.quoteAsset === 'USDT' || asset.quoteAsset === 'BTC' || asset.quoteAsset === 'ETH')))
  }

  return (
    <div>
      <h1>Binance Assets</h1>
      <button onClick={fetchAllBinanceAssets}>Click me for consoel log</button>
      {binanceAssets && <AssetDropdown assetList={binanceAssets} />}
      {/* <select>
        {binanceAssets && binanceAssets.map((item) => <option value={item.symbol}>{item.baseAsset}/{item.quoteAsset}</option>)}
      </select> */}
    </div>
  )
}

export default Assets;