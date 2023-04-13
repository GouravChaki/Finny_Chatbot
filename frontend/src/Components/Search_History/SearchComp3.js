import React,{useContext} from 'react'
import Context from "../Context_api/Context"
function SearchComp3(props) {
    const a = useContext(Context)
  return (
    a.f3 && <div class="card text-center">
  <div class="card-header">
    For {props.item.nasdaq}
  </div>
  <div class="card-body">
    <h5 class="card-title">After {props.item.p_days_after} days</h5>
    <p class="card-text">Finny predicted the price to be {props.item.p_price}</p>
  </div>
  <div class="card-footer text-body-secondary">
    {props.item.Date}
  </div>
</div>
  )
}

export default SearchComp3