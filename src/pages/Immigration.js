import React from 'react'
import { ImmigrationData } from './ImmigrationData'
import Details from './Details'
import immigration from './immigration.gif'

function Immigration() {
  return (
    <div className='dentists'>
        <div className='dentist-details'>
            {ImmigrationData.map((current)=>(
                <Details current={current}/>
            ))}
        </div>
        <div className='right-portion'>
            <img src={immigration} />
        </div>
    </div>
  )
}

export default Immigration