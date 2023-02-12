import { useState, useEffect } from 'react';
import { getPharmacies, deletePharmacy, changePharmacyStatus, addPharmacy } from '../../utils/api';

function PharmaciesPage() {
  const [pharmacy, setPharmacy] = useState([]);

  async function fetchPharmacy() {
    const response = await getPharmacies();
    setPharmacy(response);
  }

  useEffect(() => {
    fetchPharmacy();
  }, []);

  const removePharmacy = async (id) => {
    try {
      const res = await deletePharmacy(id);
      await fetchPharmacy();
    } catch (error) {
      console.log(error);
    }
  };

  const updateGard = async (id) => {
    try {
      const res = await changePharmacyStatus(id);
      await fetchPharmacy();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="main">
        <div className="Container p-4 ">
          <div className="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p className="">Pharmacies pages</p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-start"></div>
            <div className="d-flex justify-content-between mt-3 fw-bold"></div>
            <div className="d-flex justify-content-end my-2 px-5 fw-bold">
              <button className="btn bg-purple px-3 text-blod Button_ajoute" style={{ background: '#34d399' }}>
                Ajouter
              </button>
            </div>
          </div>
          <div className="table-responsive card p-2">
            <table className="table table-striped Table_responsive">
              <thead>
                <tr className="rounded tr_table">
                  <th scope="col">name</th>
                  <th scope="col">address</th>
                  <th scope="col">phone</th>
                  <th scope="col">region</th>
                  <th scope="col">Status</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                  <th scope="col">En garde</th>
                </tr>
              </thead>
              <tbody>
                {pharmacy.map((data) => (
                  <tr key={data._id}>
                    <td>{data.name}</td>
                    <td>{data.address}</td>
                    <td>{data.phone}</td>
                    <td>{data.location.region}</td>
                    <td>
                      {data.status ? (
                        <span className="badge bg-success">Active</span>
                      ) : (
                        <span className="badge bg-danger">Inactive</span>
                      )}
                    </td>
                    <td>
                      <button className="btn bg-white border border-dark p-1 px-2 text-dark Button_ajoute">
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn bg-dark  p-1 px-2 text-white Button_ajoute"
                        onClick={() => removePharmacy(data._id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <label htmlFor={`AcceptConditions-${data._id}}`} className="relative h-8 w-14 cursor-pointer">
                        <input
                          type="checkbox"
                          id={`AcceptConditions-${data._id}}`}
                          className="peer sr-only"
                          checked={data.status}
                          onChange={() => updateGard(data._id)}
                        />

                        <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>

                        <span className="absolute inset-0 m-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-6"></span>
                      </label>
                    </td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-center">{pharmacy == '' ? 'No Data.' : ''}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default PharmaciesPage;
