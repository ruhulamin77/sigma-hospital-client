import React from 'react';
import { useForm } from 'react-hook-form';
import './Appointment.css'

const Appointment = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        reset()
        console.log(data)
    };
    console.log(errors);
    // let today = new Date().toLocaleDateString()
    // console.log(today)
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
                        {

                        }

                    </select>
                    <select aria-label="Default select example"{...register("Shift", { required: true })} className="service-doctor-shift" >
                        <option>- Shift -</option>
                        <option value="Morning">Morning</option>
                        <option value="Noon">Noon</option>
                        <option value="Evening">Evening</option>

                    </select>

                    <select aria-label="Default select example"{...register("Doctor", { required: true })} className="service-doctor-shift" >
                        <option>- Doctor -</option>

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