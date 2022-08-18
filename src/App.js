import React, { useEffect, useState } from 'react';

import FileSelectionBar from './FileSelectionBar';
import SearchBar from './SeachBar';
import Map from './Map';
import SideList from './SideList';

import logo from './logo.svg'

import './App.css';


const App = () => {
  //RAW data from .xlsx file
  const [fileData, setFileData] = useState([]);
  //user input text
  const [inputText, setInputText] = useState("");
  //selected sector by clicking on it
  const [selectedSector, setSelectedSector] = useState([]);
  //array of plants on sector, for SideList
  const [itemsOnSector, setItemsOnSector] = useState([]);


  // //excluding strings without NAME key
  // const [filteredFileData, setFilteredFileData] = useState([]);

  const filteredFileData = fileData.filter((el) => el.name);
  //array of elements which contains user input
  const [plantsWithUserInput, setPlantsWithUserInput] = useState([]);
  //selected sectors
  const [selectedLocations, setSelectedLocations] = useState([]);

  //array of elements which contains user input
  const dataBasedOnUserInput = filteredFileData.filter((el) => {
    //if no input return the original
    if (inputText === '') {
      return el;
    }
    //else return the item which contains the user input
    else {
      return el.name.toLowerCase().includes(inputText)
    }
  })

  useEffect(() => {
    setPlantsWithUserInput(dataBasedOnUserInput);
  }, [inputText])


  return (
    <div className="App">
      <div className='top-bars'>
        <img src={logo} alt='logo' />
        <SearchBar inputText={inputText} setInputText={setInputText} setItemsOnSector={setItemsOnSector} setSelectedSector={setSelectedSector} />
        <FileSelectionBar setFileData={setFileData} />
      </div>

      <div className='main-content'>
        <Map filteredFileData={filteredFileData}
          inputText={setInputText}
          setInputText={setInputText}
          selectedSector={selectedSector}
          setSelectedSector={setSelectedSector}
          setItemsOnSector={setItemsOnSector}
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
          setPlantsWithUserInput={setPlantsWithUserInput} />
        <SideList itemsOnSector={itemsOnSector}
          plantsWithUserInput={plantsWithUserInput}
          filteredFileData={filteredFileData}
          selectedSector={selectedSector}
          setSelectedSector={setSelectedSector}
        />
      </div>
    </div>
  );
}

export default App;
