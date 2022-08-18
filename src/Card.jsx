import React from 'react'
import './Card.css'

const Card = ({ item, setSelectedSector, selectedSector }) => {
    const selectPlantInList = () => {
        if (!item.field) {
            console.log('The plant is not on the field')
        } else {
            setSelectedSector({
                field: item.field,
                block: item.block,
                sector: item.sector
            });
            console.log(item.field);
        }
    }

    return (
        <div className='plantItem' onClick={selectPlantInList}>
            <p className='item-code'>{item.code}</p>
            <p className='item-name'>{item.name}</p>
            <p className='item-pcs'>{item.pcs}</p>
            <p className='item-field'>{item.field}</p>
            <p className='item-block'>{item.block}</p>
            <p className='item-sector'>{item.sector}</p>
            <p className='item-field1'>{item.field_1}</p >
            <p className='item-block1'>{item.block_1}</p >
            <p className='item-sector1'>{item.sector_1}</p >
            <p className='item-field2'>{item.field_2}</p >
            <p className='item-block2'>{item.block_2}</p >
            <p className='item-sector2'>{item.sector_2}</p >
        </div>
    )
}

export default Card