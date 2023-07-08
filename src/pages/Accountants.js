import React from 'react'
import { AccountantsData } from './AccountantsData'
import Details from './Details'
import Accountant from './Accountant.gif'

function Accountants() {
  return (
    <div className='dentists'>
        <div className='dentist-details'>
            {AccountantsData.map((current)=>(
                <Details current={current}/>
            ))}
        </div>
        <div className='right-portion'>
            <img src={Accountant} />
        </div>
    </div>
  )
}

export default Accountants