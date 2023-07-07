import React from 'react'
import { PhysiotherapistData } from './PhysiotherapistData'
import Details from './Details'
import Physiotherapist from './Physiotherapist.gif'

function Physiotherapists() {
  return (
    <div className='dentists'>
        <div className='dentist-details'>
            {PhysiotherapistData.map((current)=>(
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