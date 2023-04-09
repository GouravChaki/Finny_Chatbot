import React, { useState, useEffect, useContext } from 'react';
import Context from '../Context_api/Context';
export default function Alert() {
  const a=useContext(Context)
  const close=()=>{
    a.setAlert(
    {
      msg: null,
      color: null
    }
    )
  }
  return (
    <div>
  <div className={`alert sticky-top alert-${a.alert.color} alert-dismissible fade show`}  role="alert" style={{width: '100%'}}>
       <strong>{a.alert.msg}</strong> 
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={close}></button>
  </div>
  </div>
  )
}
