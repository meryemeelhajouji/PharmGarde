import React from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios'


function PharmaciesPage() {
  const [showAddModal, setshowAddModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', address: '', email: '', phone: '' , coordinates: '',   location : ''})
  const [Pharmacy, SetPharmacy] = useState([])

  const URL = "http://localhost:5000/api/pharmacy/"
  function GetPharmacy() {
    axios.get(URL)
      .then(response => {
        console.log(response);
        SetPharmacy(response.data)
      })
  }
useEffect(() => {
  GetPharmacy()
  }, [])

  const deletePharmacy = async (id) => {
    const url = 'http://localhost:5000/api/pharmacy/' + id
    try {
      const res = await axios.delete(url);
      GetPharmacy().then(response => {
        SetPharmacy(response.data)
      })
    } catch (err) {
      console.log(err.response.data);
    }
  }

  const AddAppartemnetClick = () => {
   
    setshowAddModal(!showAddModal);
  }





 
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
              <button class="btn bg-purple px-3 text-blod Button_ajoute" onClick={AddAppartemnetClick} style={{background:"#34d399"}}>Ajouter</button>
              {showAddModal &&
                <div className='position-absolute fixed-top w-25 p-3 bg-white border border-dark mx-auto my-5 rounded-2'>
                  <form>
                    <p className='text-center'>
                      Add New Pharmacies
                    </p>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Pharmacies</label>
                      <input type="" name=''  class="form-control rounded-3" id="exampleInputEmail1" aria-describePharmacyy="emailHelp" placeholder="" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">phone</label>
                      <input type="text" name='' class="form-control rounded-3" id="exampleInputEmail1" aria-describePharmacyy="emailHelp" placeholder="" />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1">name</label>
                      <input type="text" name=''class="form-control rounded-3" id="exampleInputEmail1" aria-describePharmacyy="emailHelp" placeholder="" />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1">address</label>
                      <input type="address" name='' class="form-control rounded-3" id="exampleInputEmail1" aria-describePharmacyy="emailHelp" placeholder="" />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1">coordinates</label>
                      <input type="address" name='' class="form-control rounded-3" id="exampleInputEmail1" aria-describePharmacyy="emailHelp" placeholder="" />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1">location</label>
                      <input type="address" name='' class="form-control rounded-3" id="exampleInputEmail1" aria-describePharmacyy="emailHelp" placeholder="" />
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
                <th scope="col">name</th>
                  <th scope="col">email</th>
                  <th scope="col">address</th>
                  <th scope="col">phone</th>
                  <th scope="col">coordinates</th>
                  <th scope="col">location</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
              {Pharmacy.map(data => (
                  <tr>
                     <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.address}</td>
                    <td>{data.phone}</td>
                    <td>{data.coordinates}</td>
                    <td>{data.location}</td>
                    <td>
                      <button class="btn bg-white border border-dark p-1 px-2 text-dark Button_ajoute">Update</button> 
                    </td>
                    <td>
                    <button class="btn bg-dark  p-1 px-2 text-white Button_ajoute" onClick={() => deletePharmacy(data._id)} >Delete</button>
                    </td>
                    <td>
                    </td>
                  </tr>
  ))}
                
              </tbody>
            </table>
            <p className='text-center'>
              {Pharmacy == "" ? 'No Data.' : ''}
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default PharmaciesPage