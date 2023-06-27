import React from 'react'
import template from './template.jpg'
import { AiFillStar } from 'react-icons/ai';


function Details({ current }) {
  return (
    <div className='details'>
        <div className='above'>
            <div className='img-holder'><img src={current.img} /></div>
            <div className='name-holder'>{current.name}</div>
        </div>
        <div className='middle'><p>{current.about}</p></div>
        <div className='below'>
            <div className='location'><label>LOCATION:</label><h2>{current.location}</h2></div>
            <div className='number'><label>CONTACT:</label><h2>{current.number}</h2></div>
        </div>
        <div className='review'>
            <AiFillStar style={{ color: 'golden', size: '50px' }}/>
            <AiFillStar style={{ color: 'golden', size: '50px' }}/>
            <AiFillStar style={{ color: 'golden', size: '50px' }}/>
            <AiFillStar style={{ color: 'golden', size: '50px' }}/>
            <AiFillStar style={{ color: 'golden', size: '50px' }}/>
        </div>
    </div>
  )
}

export default Details