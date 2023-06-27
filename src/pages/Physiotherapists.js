import React from 'react'
import { DentistsData } from './DentistsData'
import Details from './Details'
import Physiotherapist from './Physiotherapist.gif'

function Physiotherapists() {
  return (
    <div className='dentists'>
        <div className='dentist-details'>
            {DentistsData.map((current)=>(
                <Details current={current}/>
            ))}
        </div>
        <div className='right-portion'>
            <img src={Physiotherapist} />
        </div>
    </div>
  )
}

export default Physiotherapists