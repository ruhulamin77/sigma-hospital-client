import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScaleLoader } from 'react-spinners';
// import { useGetBloodRequestQuery } from "../../../../features/sigmaApi";
import SingleDonor from '../SingleDonar/SingleDonor';
import './AllDonors.css';

const AllDonors = () => {
  const [donors, setDonor] = useState([]);
  const [uidonor, setUidonor] = useState([]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const seacredonor = donors.filter(
      (donor) => donor?.bloodGroup === data.bloodGroup
    );
    setUidonor(seacredonor);
  };

  // https://shrouded-headland-44423.herokuapp.com/

  useEffect(() => {
    fetch('https://shrouded-headland-44423.herokuapp.com/donors')
      .then((res) => res.json())
      .then((Donordata) => {
        const AproveDonorData = Donordata.filter(
          (data) => data.status === 'Approved'
        );
        setUidonor(AproveDonorData);
        setDonor(AproveDonorData);
      });
  }, []);

  if (!donors.length) {
    return (
      // <button class="btn btn-primary spner-btn mb-5" type="button" disabled>
      //   <span
      //     class="spinner-border spinner-border-sm"
      //     role="status"
      //     aria-hidden="true"
      //   ></span>
      //   Loading...
      // </button>

      <div className="looder-my">
        <ScaleLoader color={'#7093e5'} size={150} />
      </div>
    );
  }
  return (
    <div className="all_donor_container">
      <div className="search-fild">
        <form onSubmit={handleSubmit(onSubmit)} className="search-option">
          {/* <h3 className="donor-src">
            <p>Search donor by blood group</p>{" "}
            <i className="fas fa-arrow-right"></i>
          </h3> */}
          <div className="select-option">
            <small className="smaill-css">
              Search donor by blood group &nbsp;
            </small>
            <select {...register('bloodGroup')} className="mb-3 select-options">
              <option value="A+">A+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="B+">B+</option>
              <option value="A-">A-</option>
              <option value="O-">O-</option>
              <option value="AB-">AB-</option>
              <option value="B-">B-</option>
            </select>
            <input type="submit" value="Search" className="search-btn" />
          </div>
        </form>
      </div>
      <hr className="mb-4" />
      {/* <div className="mx-5 mb-5 make-req">
        <h5>
          If you did't find a donar, please send blood request to the blood
          bank.
        </h5>
        <NavLink
          style={{ textDecoration: "none", color: "red" }}
          to="/bloodBank/bloodRequest"
        >
          <button className="btn btn-danger mt-3" color="inherit">
            {" "}
            Blood Request
          </button>
        </NavLink>
      </div> */}
      {!uidonor.length && (
        <div>
          <h4 className="no-fund">Opps ! No Donor Found</h4>
        </div>
      )}
      <div className="row g-5">
        {uidonor.map((donordata) => (
          <SingleDonor donordata={donordata} key={donordata._id}></SingleDonor>
        ))}
      </div>
    </div>
  );
};

export default AllDonors;
