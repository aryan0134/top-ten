import React from 'react'
import { RealtorData } from './RealtorData'
import Details from './Details'
import realtors from './realtors.gif'

function Realtors() {
  return (
    <div className='dentists'>
        <div className='dentist-details'>
            {RealtorData.map((current)=>(
                <Details current={current}/>
            ))}
        </div>
        <div className='right-portion'>
            <img src={realtors} />
        </div>
    </div>
  )
}

export default Realtors