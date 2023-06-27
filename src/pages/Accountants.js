import React from 'react'
import { DentistsData } from './DentistsData'
import Details from './Details'
import Accountant from './Accountant.gif'

function Accountants() {
  return (
    <div className='dentists'>
        <div className='dentist-details'>
            {DentistsData.map((current)=>(
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