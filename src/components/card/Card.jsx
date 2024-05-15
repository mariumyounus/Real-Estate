import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import pin from "../Assets/pin.png"
import bed from "../Assets/bed.png"
import bath from "../Assets/bath.png"
import chat from "../Assets/chat.png"
import save from "../Assets/save.png"
function Card({item}) {
  return (
    <div className='card'>
  
     
  <Link to={`/${item.id}`} className='imgcontainer'>
          <img src={item.img} alt='' />
        </Link>
    
     <div className='textcontainer'>
       <h2 className='title'><Link to={`/${item.id}`}>{item.title}</Link></h2>
       <p className='address'>
        <img src={pin} alt="pin" />
        <span>{item.address}</span>
       </p>
<p className='price'>Price: <span>${item.price}</span></p>
<div className='bottom'>
  <div className='features'>
  <div className='feature'>
    <img src={bed} alt=""  /> 
    <span>{item.bedroom}bedrooms</span>
  </div><div className='feature'>
    <img src={bath} alt=""  /> 
    <span>{item.bathroom}bedrooms</span>
  </div>
 </div>
 <div className='icons'>
  <div className='icon'>
    <img src={save} alt="" />
  </div>
  <div className='icon'>
    <img src={chat} alt="" />
  </div>
 </div>
</div>
     </div>
    </div>
  )
}

export default Card
