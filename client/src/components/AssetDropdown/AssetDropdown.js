import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import './AssetDropdown.css';

const AssetDropdown = ({assetList, changeAsset}) => {

  const [dropdownOptions, setDropdownOptions] = useState([]);

  useEffect(() => {
    assetList[0].quoteAsset !== undefined ? assetList.forEach((item) => setDropdownOptions(prevState => [...prevState, {value: item.baseAsset + item.quoteAsset, label: item.baseAsset + '/' + item.quoteAsset}])) : assetList.forEach((item) => setDropdownOptions(prevState => [...prevState, {value: item.symbol, label: item.baseCurrency + '/' + item.quoteCurrency}]))
  }, [])

  //add filter option

  const onChange = selectedOption => {
    const filteredSelection = selectedOption.label.replace(/[^a-zA-Z ]/g, "");
    changeAsset(filteredSelection);
  }

  return (
    <div>
      <Select options={dropdownOptions} onChange={onChange}/>
    </div>

  )



}

export default AssetDropdown;