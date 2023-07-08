import React from 'react'
import { InsuranceAgentsData } from './InsuranceAgentsData'
import Details from './Details'
import insurance from './insurance.gif'

function InsuranceAgents() {
  return (
    <div className='dentists'>
        <div className='dentist-details'>
            {InsuranceAgentsData.map((current)=>(
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