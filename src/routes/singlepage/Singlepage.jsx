import React from 'react'
import './Singlepage.scss'
import Slider from '../../components/slider/Slider'
import {singlePostData} from '../../lib/dummydata'
import {userData} from "../../lib/dummydata"
import pin from "../../components/Assets/pin.png"
import Map from '../../components/map/Map'
import chat from "../../components/Assets/chat.png"
import save from "../../components/Assets/save.png"
import utility from "../../components/Assets/utility.png"
import pet from "../../components/Assets/pet.png"
import fee from "../../components/Assets/fee.png"
import size from "../../components/Assets/size.png"
import bath from "../../components/Assets/bath.png"
import bed from "../../components/Assets/bed.png"
import school from "../../components/Assets/school.png"
import restaurant from "../../components/Assets/restaurant.png"
import bus from "../../components/Assets/bus.png"
const Singlepage = () => {
  return (
    <div className='singlepage'>
    <div className='details'>
      <div className='wrapper'>
        <Slider images={singlePostData.images} />
        <div className='info'>
        <div className='top'>
          <div className='post'>
            <h1>{singlePostData.title}</h1>
            <div className='address'><img src={pin} alt=""/>
            <span>{singlePostData.address}</span>
            </div>
            <div className='price'>${singlePostData.price}</div>
          </div>
          <div className='user'>
           <img src={userData.img} alt=""/>
            <span>{userData.name}</span>
           
          </div>
        </div>
        <div className='bottom'>
          {singlePostData.description}
        </div>

        </div>
      </div>
    </div>
    <div className='features'>
    <div className='wrapper'>
      <p className='title'>General</p>
      <div className='ListVertical'>
        <div className='feature'>
          <img src={utility} alt=""/>
          <div className='featureText'>
            <span>Utilities</span>
            <p>Renter is responsible</p>
          </div>
        </div>
        <div className='feature'>
          <img src={pet} alt=""/>
          <div className='featureText'>
            <span>Pet Policy</span>
            <p>Pets Allowed</p>
          </div>
        </div> <div className='feature'>
          <img src={fee} alt=""/>
          <div className='featureText'>
            <span>Property Fees</span>
            <p>10% of rent fee</p>
          </div>
        </div>
      </div>
      <p className='title'>Room Sizes</p>
      <div className='ListHorizontal'>
      <div className='sizes'>
      <img src={size} alt="Fee Image"/>
      <span>800sqft</span>
      </div>
      <div className='sizes'>
      <img src={bed} alt="Fee Image"/>
      <span>2 bed</span>
      </div>
      <div className='sizes'>
      <img src={bath} alt="Fee Image"/>
      <span>1 bath</span>
      </div>
      </div>
      <p className='title'>Nearby Places</p>
      <div className='ListHorizontal'>
      <div className='feature'>
          <img src={school} alt=""/>
          <div className='featureText'>
            <span>School</span>
            <p>500m away</p>
          </div>
        </div> 
        <div className='feature'>
          <img src={bus} alt=""/>
          <div className='featureText'>
            <span>Bus Stop</span>
            <p>700m away</p>
          </div>
        </div> 
        <div className='feature'>
          <img src={restaurant} alt=""/>
          <div className='featureText'>
            <span>restaurant</span>
            <p>500m away</p>
          </div>
        </div> 
      </div>
      <p className='title'>Location</p>
      <div className='mapContainer'>
        <Map items={[singlePostData]}/>
      </div>
      <div className='buttons'>
<button>
  <img src={chat} alt="" />
  Send a Message
</button>
<button>
  <img src={save} alt="" />
  Save the Home
</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Singlepage