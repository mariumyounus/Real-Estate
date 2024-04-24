import React from 'react'
import './Listpage.scss'
import { listData } from '../../lib/dummydata'
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
const Listpage = () => {
  const data=listData;
  return (
    <div className='listpage'>

     <div className='listcontainer'>
      <div className='wrapper'>
        <Filter />
        {
          data.map((item)=>{
            return (<Card key={item.id} data={item} />)
          }  )}
      </div>
     </div>
     <div className='mapcontainer'>Map</div>
    </div>
  )
}

export default Listpage
