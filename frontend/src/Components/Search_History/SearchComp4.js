import React from 'react'

function SearchComp4(props) {
    const a = useContext(Context)
  return (
   a.f4 && <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
</div>
  )
}

export default SearchComp4