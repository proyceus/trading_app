import { useState, useEffect } from 'react';


const Assets = () => {

  const [binanceAssets, setBinanceAssets] = useState(null);

  useEffect(() => {
    // fetchAllBinanceAssets();
  }, [])

  const fetchAllBinanceAssets = async () => {
    await fetch("https://api.binance.com/api/v3/exchangeInfo")
      .then(response => response.json())
      .then(data => setBinanceAssets(data.symbols));
  }

  return (
    <div>
      <h1>Binance Assets</h1>
      <button onClick={fetchAllBinanceAssets}>Click me for consoel log</button>
      <select>
        {binanceAssets && binanceAssets.map((item) => <option value={item.symbol}>{item.baseAsset}/{item.quoteAsset}</option>)}
      </select>
    </div>
  )
}

export default Assets;