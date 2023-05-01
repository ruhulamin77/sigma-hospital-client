import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useGetNursesQuery } from '../../../../features/sigmaApi';

const NurseProfileUpdate = () => {
  const allNurse = useGetNursesQuery();
  const { id } = useParams();
  const [singleNurseInfo, setSingleNurseInfo] = useState([]);

  useEffect(() => {
    const doctorData = allNurse?.data?.find((doctorId) => doctorId._id === id);
    setSingleNurseInfo(doctorData);
  }, [allNurse?.data, id]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(`https://sigma-hospital-server.onrender.com/updateNurse/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: "Nurse's informatoin has been successfully updated!",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div style={{ backgroundColor: '#F4F7F6', padding: '20px 0' }}>
      <Container>
        <Card className="shadow p-3 mt-3">
          <Card.Body>
            <Card.Text className="mb-3 fs-4">
              <b>GIVE SOME BASIC INFORMATION TO ADD A NURSE</b>
            </Card.Text>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                  <input
                    className="input-field-name"
                    type="text"
                    {...register('name', { required: true })}
                    defaultValue={singleNurseInfo?.name}
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <input
                        className="input-field-name"
                        type="email"
                        {...register('email', { required: true })}
                        defaultValue={singleNurseInfo?.email}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <input
                        className="input-field-name"
                        type="number"
                        {...register('phone', { required: true })}
                        defaultValue={singleNurseInfo?.phone}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <select
                        className="service-doctor"
                        {...register('gender', { required: true })}
                        defaultValue={singleNurseInfo?.gender}
                      >
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <select
                        className="service-doctor"
                        {...register('time', { required: true })}
                        defaultValue={singleNurseInfo?.time}
                      >
                        <option value="7.00 am - 3.00 pm">
                          7.00 am - 3.00 pm
                        </option>
                        <option value="3.00 pm - 10.00 pm">
                          3.00 pm - 10.00 pm
                        </option>
                        <option value="10.00 pm - 7.00 am">
                          10.00 pm - 7.00 am
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <select
                        className="service-doctor"
                        {...register('day', { required: true })}
                        defaultValue={singleNurseInfo?.day}
                      >
                        <option value="Monday - Friday">Monday - Friday</option>
                        <option value="Sunday - Thrusday">
                          Sunday - Thrusday
                        </option>
                        <option value="Friday - Monday">Friday - Monday</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <select
                        className="service-doctor"
                        {...register('shift', { required: true })}
                        defaultValue={singleNurseInfo?.shift}
                      >
                        <option value="Morning">Morning</option>
                        <option value="Evening">Evening</option>
                        <option value="Night">Night</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <input
                    className="input-field-name"
                    type="text"
                    {...register('description', { required: true })}
                    defaultValue={singleNurseInfo?.description}
                  />
                </div>
              </div>

              <button type="submit" className="pulse">
                {' '}
                Submit{' '}
              </button>
            </form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default NurseProfileUpdate;
