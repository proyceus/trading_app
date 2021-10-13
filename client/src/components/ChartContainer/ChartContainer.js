import React, {useEffect, useState} from 'react';
import './ChartContainer.css';


const ChartContainer = ({asset}) => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js'
    script.async = true;
    script.innerHTML = new window.TradingView.widget({
      "width": 980,
      "height": 610,
      "symbol": asset,
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "container_id": "tradingview_dc545"
    });
    document.querySelector(".tradingview-widget-container").appendChild(script);
  });

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_dc545"></div>
      <div class="tradingview-widget-copyright">Trading Chart by <a href="www.tradingview.com">TradingView</a></div>
    </div>

  )
}

export default ChartContainer;
