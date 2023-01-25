import React from 'react'
// import dash from '../../assets/dash.css'

function HomePage() {
  return (
    <>
      <main class="main">
        <div class="Container p-4 ">
          <div class="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p class="">Dashboard</p>
          </div>
          <div class="divs1 mt-3">
            <div class="divs2 card">
              <i class=""></i>
              <p>
              Commentaires
              </p>
              <p class="num">
               
              </p>
            </div>
            <div class="divs2 card" id="wst1">
              <i class=""></i>
              <p>
              Pharmacies
              </p>
              <p class="num">
               
              </p>
            </div>
            <div class="divs2 card" id="wst2">
              <i class=""></i>
              <p>
               Users
              </p>
              <p class="num">
              
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage