
const Assets = () => {

  const onClick = () => {
    fetch('https://binance.us/api/v3/trades?BTCUSD', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  )
}

export default Assets;