import React from 'react'
import { DentistsData } from './DentistsData'
import Details from './Details'
import insurance from './insurance.gif'

function InsuranceAgents() {
  return (
    <div className='dentists'>
        <div className='dentist-details'>
            {DentistsData.map((current)=>(
                <Details current={current}/>
            ))}
        </div>
        <div className='right-portion'>
            <img src={insurance} />
        </div>
    </div>
  )
}

export default InsuranceAgents