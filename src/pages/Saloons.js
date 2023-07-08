import React from 'react'
import { SaloonData } from './SaloonData'
import Details from './Details'
import saloon from './saloon.gif'

function Saloons() {
  return (
    <div className='dentists'>
        <div className='dentist-details'>
            {SaloonData.map((current)=>(
                <Details current={current}/>
            ))}
        </div>
        <div className='right-portion'>
            <img src={saloon} style={{height:"90%"}}/>
        </div>
    </div>
  )
}

export default Saloons