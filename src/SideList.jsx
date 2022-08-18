import React, { useEffect } from 'react'

import Card from './Card'

import './SideList.css'

const SideList = ({ itemsOnSector, setSelectedSector, selectedSector, plantsWithUserInput, filteredFileData }) => {

    useEffect(() => { }, [itemsOnSector, plantsWithUserInput])
    let toMap = filteredFileData;

    if (itemsOnSector.length === 0 && plantsWithUserInput.length === 0) {
        toMap = filteredFileData;
    }

    if (itemsOnSector.length !== 0) {
        toMap = itemsOnSector;
    }

    else {
        toMap = plantsWithUserInput;
    }

    console.log('selectedSector', selectedSector.length);
    console.log('itemsOnSector', itemsOnSector.length);
    console.log('plantsWithUserInput', plantsWithUserInput.length);

    return (
        <div className='side-list'>
            {toMap.length > 0 ? <div className='list-header'>
                <p className='code'>Code</p>
                <p className='name'>Name</p>
                <p className='pcs' >Pcs</p>
                <p className='loc1'>Loc1</p>
                <p className='loc2'>Loc2</p>
                <p className='loc3'>Loc3</p>
            </div> : <div className='no-data' >No data. Select Sector or type in Search field</div>}
            {
                toMap.map((item) => {
                    return (
                        <Card key={item.code} item={item} setSelectedSector={setSelectedSector} selectedSector={selectedSector} />
                    )
                })
            }
        </div>
    )
}

export default SideList