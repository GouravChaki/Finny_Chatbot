import React from 'react'
import Context from "../Context_api/Context"
function SearchComp1(props) {
  const a = useContext(Context)
  return (
    a.f1 && <div class="card text-center">
  <div class="card-header">
    You wanted the stocks for the price {props.item.price}
  </div>
  <div class="card-body">
    <h5 class="card-title">Finny responded with this: </h5>
    <div class="card-text"><table>{props.func}</table></div>
  </div>
  <div class="card-footer text-body-secondary">
    {props.item.Date}
  </div>
</div>
  )
}

export default SearchComp1