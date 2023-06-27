import React from 'react'
import { DentistsData } from './DentistsData'
import Details from './Details'
import optimetrist from './optimetrist.gif'

function Optimetrists() {
  return (
    <div className='dentists'>
        <div className='dentist-details'>
            {DentistsData.map((current)=>(
                <Details current={current}/>
            ))}
        </div>
        <div className='right-portion'>
            <img src={optimetrist} style={{height:'95%'}}/>
        </div>
    </div>
  )
}

export default Optimetrists