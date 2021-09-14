

module.exports = function(app) {
  app.get('/trades', (req, res) => {
    fetch('https://www.binance.us/api/v3/trades?symbol=BTCUSD')
      .then(response => response.json())
      .then(data => console.log(data));
  });
}