import React from 'react';
import { useState } from 'react';

function CommentairesPage() {
  const [showAddModal, setshowAddModal] = useState(false);

  return (
    <>
      <main className="main">
        <div className="Container p-4 ">
          <div className="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p className="">Commentaires pages</p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-between mt-3 fw-bold"></div>
            <div className="d-flex justify-content-end my-2 px-5 fw-bold">
              <button className="btn bg-purple px-3 text-blod Button_ajoute" style={{ background: '#34d399' }}>
                Ajouter
              </button>
              {showAddModal && (
                <div className="position-absolute fixed-top w-25 p-3 bg-white border border-dark mx-auto my-5 rounded-2">
                  <form>
                    <p className="text-center">Add New Paiement</p>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Commentaires</label>
                      <input
                        type=""
                        name=""
                        className="form-control rounded-3"
                        id="exampleInputEmail1"
                        aria-describePaiementy="emailHelp"
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">cin</label>
                      <input
                        type="text"
                        name=""
                        className="form-control rounded-3"
                        id="exampleInputEmail1"
                        aria-describePaiementy="emailHelp"
                        placeholder=""
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">amount</label>
                      <input
                        type="text"
                        name=""
                        className="form-control rounded-3"
                        id="exampleInputEmail1"
                        aria-describePaiementy="emailHelp"
                        placeholder=""
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">date</label>
                      <input
                        type="date"
                        name=""
                        className="form-control rounded-3"
                        id="exampleInputEmail1"
                        aria-describePaiementy="emailHelp"
                        placeholder=""
                      />
                    </div>
                    <div className="w-100 d-flex justify-content-between">
                      <button className="btn bg-dark px-3 text-white mt-2 Button_ajoute">Add</button>
                      <button className="btn bg-dark px-3 text-white mt-2 Button_ajoute">Cancel</button>
                    </div>
                    <p className="text-center text-danger"></p>
                  </form>
                </div>
              )}
            </div>
          </div>
          <div className="table-responsive card p-2">
            <table className="table table-striped Table_responsive">
              <thead>
                <tr className="rounded tr_table">
                  <th scope="col">namberDappartement</th>
                  <th scope="col">amount</th>
                  <th scope="col">date</th>
                  <th scope="col">cin</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <button className="btn bg-white border border-dark p-1 px-2 text-dark Button_ajoute">Update</button>
                  </td>
                  <td>
                    <button className="btn bg-dark  p-1 px-2 text-white Button_ajoute">Delete</button>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <p className="text-center">{/* {Paiement == "" ? 'No Data.' : ''} */}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default CommentairesPage;
