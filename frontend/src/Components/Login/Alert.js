import React from 'react'

export default function Alert(props) {
  const close=()=>{
    props.setValue()
  }
  return (
    <div>
  <div class="alert sticky-top alert-warning alert-dismissible fade show" role="alert" style={{width: '100%'}}>
       <strong>You Have Successfully Logged In!</strong> 
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={close}></button>
  </div>
  </div>
  )
}
