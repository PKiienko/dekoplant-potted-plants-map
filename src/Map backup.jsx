import React, { useEffect } from 'react'
import { useState } from 'react'

import Card from './Card.jsx'

import locations from './locations.js'

import './Map.css'

const Map = ({ filteredFileData, setInputText, setSelectedSector, selectedSector }) => {
    //array of plants on sector
    const [itemsOnSector, setItemsOnSector] = useState([]);
    //sectors
    const [selectedLocations, setSelectedLocations] = useState([]);

    useEffect(() => { showPlantsOnSector(selectedLocations) }, [selectedLocations]);

    const showPlantsOnSector = (location) => {
        setSelectedLocations(location);
        setInputText('');
        setItemsOnSector([]);
        filteredFileData.map(plant => {
            if ((plant.name) &&
                (plant.field === selectedLocations.field) &&
                (plant.block === selectedLocations.block) &&
                (plant.sector === selectedLocations.sector)) {
                setItemsOnSector(itemsOnSector => [...itemsOnSector, plant])
            }
        })
    }

    return (
        <div className='fieldsMap'>
            <div className='field6'>
                <h3>Field 6</h3>
                <div className="blocksName">
                </div>
                <div className='blocks'>
                    <div className='block6-11'>
                        <div className='sectors'>
                            <div className='sector6-11-D' onClick={() => showPlantsOnSector(locations[43])}>
                                <h4>6-11-D</h4>
                            </div>
                            <div className='sector6-11-C' onClick={() => showPlantsOnSector(locations[42])}>
                                <h4>6-11-C</h4>
                            </div>
                            <div className='sector6-11-B' onClick={() => showPlantsOnSector(locations[41])}>
                                <h4>6-11-B</h4>
                            </div>
                            <div className='sector6-11-A' onClick={() => showPlantsOnSector(locations[40])}>
                                <h4>6-11-A</h4>
                            </div>
                        </div>
                    </div>
                    <div className='block6-11'>
                        <div className='sectors'>
                            <div className='sector6-12-D' onClick={() => showPlantsOnSector(locations[47])}>
                                <h4>6-12-D</h4>
                            </div>
                            <div className='sector6-12-C' onClick={() => showPlantsOnSector(locations[46])}>
                                <h4>6-12-C</h4>
                            </div>
                            <div className='sector6-12-B' onClick={() => showPlantsOnSector(locations[45])}>
                                <h4>6-12-B</h4>
                            </div>
                            <div className='sector6-12-A' onClick={() => showPlantsOnSector(locations[44])}>
                                <h4>6-12-A</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blocksName">
                    <h5>Block 11</h5>
                    <h5>Block 12</h5>
                </div>
            </div>
            {itemsOnSector.map((item) => {
                return (
                    <Card key={item.code} item={item} setSelectedSector={setSelectedSector} selectedSector={selectedSector} />
                )
            })}
        </div >
    )
}

export default Map