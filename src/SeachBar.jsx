import React from 'react'

import './SearchBar.css'

const SeachBar = ({ inputText, setInputText, setItemsOnSector, setSelectedSector }) => {

    const inputTextHandler = (e) => {
        e.preventDefault();
        setInputText(e.target.value.toLowerCase())
        setItemsOnSector([]);
    }

    return (
        <div className='searchForm'>
            {/* <label htmlFor="searchword">Search</label> */}
            <input className='input-field'
                type="text"
                name="searchword"
                id="searchword"
                placeholder='Enter plant name here'
                value={inputText}
                onChange={inputTextHandler}
            />
        </div>
    )
}

export default SeachBar