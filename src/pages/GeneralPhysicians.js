import React from 'react'
import { DentistsData } from './DentistsData'
import Details from './Details'
import genPhysician from './genPhysician.gif'

function GeneralPhysicians() {
  return (
    <div className='dentists'>
        <div className='dentist-details'>
            {DentistsData.map((current)=>(
                <Details current={current}/>
            ))}
        </div>
        <div className='right-portion'>
            <img src={genPhysician} />
        </div>
    </div>
  )
}

export default GeneralPhysicians