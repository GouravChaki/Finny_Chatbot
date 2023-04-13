import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useState, useEffect,useContext } from 'react';
import SearchComp2 from './SearchComp2'
import MaybeshowNavbar from '../Maybeshownavbar/Maybeshownavbar'
import SearchComp1 from './SearchComp1'
import SearchComp3 from './SearchComp3'
import SearchComp4 from './SearchComp4'
import Context from '../Context_api/Context';
export default function Search() {
  
    const a = useContext(Context)


const feature1 = ()=>{
  Object.values(a.f1).map(
    (items)=>{
    const sub_f1 = ()=>{
      Object.keys(items.c_names.Index).map((item)=>{
        return (
        <tr>
          <th>{items.c_names.Index.item}</th>
          <th>{items.c_names.Symbol.item}</th>
          <th>{items.c_names.Name.item}</th>
          <th>{items.c_names.Last_sale.item}</th>
          <th>{items.c_names.price_5days.item}</th>
          <th>{items.c_names.price_7days.item}</th>
          <th>{items.c_names.price_10days.item}</th>
          </tr>)
      })}
      return <SearchComp1 func = {sub_f1}  item={a.f1.items.c_names}/>
     })
    }



    const feature2 = Object.values(a.f2).map((item)=>{
      return <SearchComp2 item={item} key={item}/>
    })


    const feature3 = Object.values(a.f3).map((item)=>{
       return <SearchComp3 item={item} key={item}/>
    })
  //   useEffect(() => {
  //     a.setNavbar(true)
  //  },[])

  const feature4 = ()=>{
    Object.values(a.f4).map(
      (items)=>{
      const sub_f4 = ()=>{
        Object.keys(items.output.date).map((item)=>{
          return (
          <tr>
            <th>{items.output.date.item}</th>
            <th>{items.output.open.item}</th>
            <th>{items.output.high.item}</th>
            <th>{items.output.low.item}</th>
            <th>{items.output.close.item}</th>
            <th>{items.output.adjclose.item}</th>
            <th>{items.output.volume.item}</th>
            </tr>)
        })}
        return <SearchComp4 func = {sub_f4}  item={a.f4.items.output}/>
       })
      }


  return (
    <>
    <MaybeshowNavbar>
      <Navbar/>
    </MaybeshowNavbar>
    {a.token} && <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        FEATURE 1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {feature1}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        FEATURE 2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {feature2}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        FEATURE 3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {feature3}
      </div>
    </div>
  </div>
<div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
       Feature 4
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {feature4}
      </div>
    </div>
  </div>
</div>
    <Footer/>
    </>
  )
}
