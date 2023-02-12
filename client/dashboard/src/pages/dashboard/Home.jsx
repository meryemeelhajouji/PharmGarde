import React from 'react';
// import dash from '../../assets/dash.css'

function HomePage() {
  return (
    <>
      <main className="main">
        <div className="Container p-4 ">
          <div className="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p className="">Dashboard</p>
          </div>
          <div className="divs1 mt-3">
            <div className="divs2 card">
              <i className=""></i>
              <p>Commentaires</p>
              <p className="num"></p>
            </div>
            <div className="divs2 card" id="wst1">
              <i className=""></i>
              <p>Pharmacies</p>
              <p className="num"></p>
            </div>
            <div className="divs2 card" id="wst2">
              <i className=""></i>
              <p>Users</p>
              <p className="num"></p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
