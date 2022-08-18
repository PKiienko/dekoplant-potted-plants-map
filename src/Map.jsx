import React, { useEffect } from 'react'

import locations from './locations.js'

import './Map.css'

const Map = ({ setPlantsWithUserInput, filteredFileData, inputText, setInputText, setSelectedSector, selectedSector, setItemsOnSector, selectedLocations, setSelectedLocations }) => {

    useEffect(() => { showPlantsOnSector(selectedLocations) }, [selectedLocations, inputText]);

    //clicking on sector
    const showPlantsOnSector = (location) => {
        setSelectedLocations(location);
        setInputText('');
        setPlantsWithUserInput([]);
        setItemsOnSector([]);
        //filtering elements with selected conditions
        filteredFileData.map(plant => {
            if (
                ((plant.name) && (plant.field === selectedLocations.field) && (plant.block === selectedLocations.block) && (plant.sector === selectedLocations.sector)) ||
                ((plant.name) && (plant.field_1 === selectedLocations.field) && (plant.block_1 === selectedLocations.block) && (plant.sector_1 === selectedLocations.sector)) ||
                ((plant.name) && (plant.field_2 === selectedLocations.field) && (plant.block_2 === selectedLocations.block) && (plant.sector_2 === selectedLocations.sector))
            ) {
                setItemsOnSector(itemsOnSector => [...itemsOnSector, plant])
            }
        })
    }

    return (
        <div className='allFields'>
            <div className="upperFields">
                <div className="motherPlants">
                    <h4>Маточні поля</h4>
                </div>
                <div className='field6'>
                    <div className="blockLeft">
                        <div className='sector' onClick={() => showPlantsOnSector(locations[43])}>
                            <h4>6-11-D</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[42])}>
                            <h4>6-11-C</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[41])}>
                            <h4>6-11-B</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[40])}>
                            <h4>6-11-A</h4>
                        </div>
                    </div>
                    <div className="blockRight">
                        <div className='sector' onClick={() => showPlantsOnSector(locations[47])}>
                            <h4>6-12-D</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[46])}>
                            <h4>6-12-C</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[45])}>
                            <h4>6-12-B</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[44])}>
                            <h4>6-12-A</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lowerFields">
                <div className='field1'>
                    <div className="blockLeft">
                        <div className='sector' onClick={() => showPlantsOnSector(locations[3])}>
                            <h4>1-1-D</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[2])}>
                            <h4>1-1-C</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[1])}>
                            <h4>1-1-B</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[0])}>
                            <h4>1-1-A</h4>
                        </div>
                    </div>
                    <div className="blockRight">
                        <div className='sector' onClick={() => showPlantsOnSector(locations[7])}>
                            <h4>1-2-D</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[6])}>
                            <h4>1-2-C</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[5])}>
                            <h4>1-2-B</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[4])}>
                            <h4>1-2-A</h4>
                        </div>
                    </div>
                </div>
                <div className='field2'>
                    <div className="blockLeft">
                        <div className='sector' onClick={() => showPlantsOnSector(locations[11])}>
                            <h4>2-3-D</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[10])}>
                            <h4>2-3-C</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[9])}>
                            <h4>2-3-B</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[8])}>
                            <h4>2-3-A</h4>
                        </div>
                    </div>
                    <div className="blockRight">
                        <div className='sector' onClick={() => showPlantsOnSector(locations[15])}>
                            <h4>2-4-D</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[14])}>
                            <h4>2-4-C</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[13])}>
                            <h4>2-4-B</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[12])}>
                            <h4>2-4-A</h4>
                        </div>
                    </div>
                </div>
                <div className='field3'>
                    <div className="blockLeft">
                        <div className='sector' onClick={() => showPlantsOnSector(locations[19])}>
                            <h4>3-5-D</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[18])}>
                            <h4>3-5-C</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[17])}>
                            <h4>3-5-B</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[16])}>
                            <h4>3-5-A</h4>
                        </div>
                    </div>
                    <div className="blockRight">
                        <div className='sector' onClick={() => showPlantsOnSector(locations[23])}>
                            <h4>3-6-D</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[22])}>
                            <h4>3-6-C</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[21])}>
                            <h4>3-6-B</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[20])}>
                            <h4>3-6-A</h4>
                        </div>
                    </div>
                </div>
                <div className='field4'>
                    <div className="blockLeft">
                        <div className='sector' onClick={() => showPlantsOnSector(locations[27])}>
                            <h4>4-7-D</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[26])}>
                            <h4>4-7-C</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[25])}>
                            <h4>4-7-B</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[24])}>
                            <h4>4-7-A</h4>
                        </div>
                    </div>
                    <div className="blockRight">
                        <div className='sector' onClick={() => showPlantsOnSector(locations[31])}>
                            <h4>4-8-D</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[30])}>
                            <h4>4-8-C</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[29])}>
                            <h4>4-8-B</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[28])}>
                            <h4>4-8-A</h4>
                        </div>
                    </div>
                </div>
                <div className='field5'>
                    <div className="blockLeft">
                        <div className='sector' onClick={() => showPlantsOnSector(locations[35])}>
                            <h4>5-9-D</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[34])}>
                            <h4>5-9-C</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[33])}>
                            <h4>5-9-B</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[32])}>
                            <h4>5-9-A</h4>
                        </div>
                    </div>
                    <div className="blockRight">
                        <div className='sector' onClick={() => showPlantsOnSector(locations[39])}>
                            <h4>5-10-D</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[38])}>
                            <h4>5-10-C</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[37])}>
                            <h4>5-10-B</h4>
                        </div>
                        <div className='sector' onClick={() => showPlantsOnSector(locations[36])}>
                            <h4>5-10-A</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Map