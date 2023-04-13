import React , {useContext} from 'react'
import Context from "../Context_api/Context"
function SearchComp2(props) {
    const a = useContext(Context)
    const sub_f2 = ()=>{
        let s = props.item.output.c1
        let t = props.item.output.c2
        var message2_1
        var message2_2
        var message_1 = "After " + props.item.days_after + " days: "
        message2_1 = 'For ' + s.nasdaq + ":\nOpen : " + s.open + "\nHigh : " + s.high  + "\nLow : " + s.low + "\nClose : " + s.close
        message2_2 = 'For ' + t.nasdaq + ":\nOpen : " + t.open + "\nHigh : " + t.high  + "\nLow : " + t.low + "\nClose : " + t.close
        var message_n = message_1 + "\n\n" + message2_1 + "\n\n" + message2_2
        console.log(message_n)
        a.setHF2(message_n)
    }
    sub_f2()
  return (
   a.f2 && <div class="card text-center">
  <div class="card-header">
     {props.item.output.c1} V/s {props.item.output.c2}
  </div>
  <div class="card-body">
    <h5 class="card-title">After {props.item.days_after} days</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
  <div class="card-footer text-body-secondary">
    Done on {props.item.Date}
  </div>
</div>
  )
}

export default SearchComp2