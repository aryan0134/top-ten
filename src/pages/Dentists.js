import React from 'react'
import { DentistsData } from './DentistsData'
import Details from './Details'
import dentist from './dentist.gif'

function Dentists() {
  return (
    <div className='dentists'>
        <div className='dentist-details'>
            {DentistsData.map((current)=>(
                <Details current={current}/>
            ))}
        </div>
        <div className='right-portion'>
            <img src={dentist} />
        </div>
    </div>
  )
}

export default Dentists