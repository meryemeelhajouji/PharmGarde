import React from 'react'
import { useState} from 'react'



function PharmaciesPage() {
  const [showAddModal, setshowAddModal] = useState(false);
 
  return (
    <>
      <main class="main">
        <div class="Container p-4 ">
          <div class="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p class="">Pharmacies pages</p>
          </div>
          <div class="d-flex justify-content-between">
            <div class="d-flex justify-content-between mt-3 fw-bold">
            </div>
            <div class="d-flex justify-content-end my-2 px-5 fw-bold">
              <button class="btn bg-purple px-3 text-blod Button_ajoute" style={{background:"#34d399"}}>Ajouter</button>
              {showAddModal &&
                <div className='position-absolute fixed-top w-25 p-3 bg-white border border-dark mx-auto my-5 rounded-2'>
                  <form>
                    <p className='text-center'>
                      Add New Pharmacies
                    </p>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Pharmacies</label>
                      <input type="" name=''  class="form-control rounded-3" id="exampleInputEmail1" aria-describePaiementy="emailHelp" placeholder="" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">cin</label>
                      <input type="text" name='' class="form-control rounded-3" id="exampleInputEmail1" aria-describePaiementy="emailHelp" placeholder="" />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1">amount</label>
                      <input type="text" name=''class="form-control rounded-3" id="exampleInputEmail1" aria-describePaiementy="emailHelp" placeholder="" />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1">date</label>
                      <input type="date" name='' class="form-control rounded-3" id="exampleInputEmail1" aria-describePaiementy="emailHelp" placeholder="" />
                    </div>
                    <div className='w-100 d-flex justify-content-between'>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" >Add</button>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" >Cancel</button>
                    </div>
                    <p className='text-center text-danger'>
                    
                    </p>
                  </form>
                </div>
              }
            </div>
          </div>
          <div class="table-responsive card p-2">
            <table class="table table-striped Table_responsive">
              <thead>
                <tr class="rounded tr_table">
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
                      <button class="btn bg-white border border-dark p-1 px-2 text-dark Button_ajoute">Update</button> 
                    </td>
                    <td>
                      <button class="btn bg-dark  p-1 px-2 text-white Button_ajoute" >Delete</button>
                    </td>
                    <td>
                    </td>
                  </tr>

                
              </tbody>
            </table>
            <p className='text-center'>
              {/* {Paiement == "" ? 'No Data.' : ''} */}
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default PharmaciesPage