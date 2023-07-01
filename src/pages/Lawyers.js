import React from 'react'
import { LawyersData } from './LawyersData'
import Details from './Details'
import lawyer3 from './lawyer3.gif'

function Lawyers() {
  return (
    <div className='dentists'>
        <div className='dentist-details'>
            {LawyersData.map((current)=>(
                <Details current={current}/>
            ))}
        </div>
        <div className='right-portion'>
            <img src={lawyer3} />
        </div>
    </div>
  )
}

export default Lawyers