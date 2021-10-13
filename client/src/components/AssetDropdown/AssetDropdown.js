import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import './AssetDropdown.css';

const AssetDropdown = ({assetList}) => {

  const [dropdownOptions, setdropdownOptions] = useState([]);

  useEffect(() => {
    assetList.forEach((item) => setdropdownOptions(prevState => [...prevState, {value: item.symbol, label: item.baseAsset + '/' + item.quoteAsset}]))
  }, [])

  //add filter option

  return (
    <div>
      <Select options={dropdownOptions} />
    </div>

  )



}

export default AssetDropdown;