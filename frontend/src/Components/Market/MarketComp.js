
import RenderCard from './RenderCard.js';
import React, { useState, useEffect,useContext } from 'react';
import MainContext from '../Context/MainContext.js';
export default function MarketComp() {
      // const card=(item)=>{
      //   return <RenderCard key={item.key} item={item}/>
      // }
const a=useContext(MainContext)
useEffect(()=>{
  a.market()
},[])
  return (
    <div className="col-md-9 mt-3" style = {{marginLeft:"20%"}}>
  <div className="mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {//(a.Data).map(card)
        a.market()}
      </div>
    </div>
  </div>
  )
}
