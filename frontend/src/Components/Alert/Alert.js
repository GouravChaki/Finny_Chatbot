import React from 'react'

export default function Alert(props) {
  return (
    {a.alert &&<div className={`alert alert-${a.alert.color}`} role="alert">{a.alert.msg}</div>}
  )
}
