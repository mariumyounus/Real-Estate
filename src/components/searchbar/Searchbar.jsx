import React from 'react'
import './Searchbar.scss'
import search from "../Assets/search.png"
const types=['buy','rent'];
const Searchbar = () => {
  
  const [query, setQuery] = React.useState({
    type: 'buy',
    location: '',
    minPrice: 0,
    maxPrice: 0,

  })
 const switchType=(val)=>{
  setQuery((prev)=>({...prev,type:val}));
 }
  return (
    <div className='searchbar'> 
    <div className='type'>
    {types.map((type,index)=>(
      <button key={index} onClick={()=>switchType(type)} className={query.type===type ?"active" :""}>{type}</button>
    ))}
    

    </div>
    <form>
      <input type='text' name="location" placeholder='City Location' />
      <input type='number' name="minPrice" min={0} max={1000000} placeholder='Min Price' />
      <input type='number' name="maxPrice" min={0} max={1000000} placeholder='Max Price' />
      <button><img src={search} alt=""/></button>
    </form>
      
    </div>
  )
}

export default Searchbar
