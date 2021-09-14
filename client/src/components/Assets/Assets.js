import { useState, useEffect } from 'react';


const Assets = () => {

  const [assets, setAssets] = useState(null);

  useEffect(() => {
    fetchAssets();
  }, [])

  const fetchAssets = async () => {
    await fetch("https://www.binance.us/api/v3/trades?symbol=BTCUSD")
      .then(response => response.json())
      .then(data => setAssets(data))
  }

  return (
    <div>
      <button onClick={fetchAssets}>Click me</button>
      <ul>
        {assets && assets.map((item) => <li>Price: {item.price} | Quantity: {item.qty}</li>)}
      </ul>
    </div>
  )
}

export default Assets;