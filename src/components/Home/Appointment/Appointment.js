import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Appointment.css'

const Appointment = () => {
    const [doctor, setDoctor] = useState([]);
    const [shiftDoctor, setShiftDoctor] = useState([]);

    // console.log(shiftDoctor, "hello")



    useEffect(() => {
        fetch("https://shrouded-headland-44423.herokuapp.com/doctors")
            .then(res => res.json())
            .then(data => {
                setShiftDoctor(data)
                setDoctor(data)
            })
    }, [])


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {



        reset()

    };




    const handalonblure = (e) => {
        const seacredoctor = doctor.filter(doctors => doctors?.shift.toLowerCase() === e.target.value);
        setShiftDoctor(seacredoctor)


    }




    return (
        <div>
            <div className='container'>
                <h4 className='appointment'>Book Appointment</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="First name" {...register("First-name", { required: true, maxLength: 80 })} className="input-field-name" />
                    <input type="text" placeholder="Last name" {...register("Last-name", { required: true, maxLength: 100 })} className="input-field-name" /> <br />
                    {/* 2nd Line Start */}

                    <input type="number" placeholder="Age" {...register("Age", { required: true })} className="service-doctor-shift" />
                    <select aria-label="Default select example"{...register("Gender", { required: true })} className="service-doctor-shift">
                        <option>- Gender -</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>



                    <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} className="service-doctor-shift" />
                    <input type="tel" placeholder="Mobile number" {...register("Mobile-number", { required: true, minLength: 6, maxLength: 12 })} className="service-doctor-shift" /> <br />

                    {/* 2nd Line end */}

                    {/* 3rd Line Start */}

                    <select aria-label="Default select example"{...register("Service", { required: true })} className="service-doctor-shift" >
                        <option>- Service -</option>
                        {/* {
                            doctor.map(doctor => <option>{doctor.time}</option>)

                        } */}

                    </select>
                    <select aria-label="Default select example"{...register("Shift", { required: true })} onBlur={handalonblure} className="service-doctor-shift" >
                        <option>- Shift -</option>
                        <option value="morning">Morning</option>
                        <option value="evening">Evening</option>
                        <option value="night">Night</option>

                    </select>

                    <select aria-label="Default select example"{...register("Doctor", { required: true })} className="service-doctor-shift" >
                        <option>- Doctor -</option>
                        {
                            shiftDoctor.map(doctor => <option>{doctor.name}</option>)

                        }

                    </select>

                    <input type="date"   {...register("Date", { required: true })} className="service-doctor-shift" />
                    {/* 3rd Line end */}
                    <br />
                    <textarea placeholder="Please type what you want..." {...register("description", { required: true })} className="description-box" ></textarea> <br />

                    <input type="submit" className='submit-btn' />
                </form>


            </div>

        </div>
    );
};

export default Appointment;