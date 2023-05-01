import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './AddMedicine.css';

const AddMedicine = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post('https://sigma-hospital-server.onrender.com/medicine', data)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success(`Add to Product`, {
            position: 'bottom-left',
          });
          reset();
        }
      });
  };
  return (
    <section>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="from-fild">
          <h4 className="add">Add New Medicen</h4>
          <input
            {...register('brand')}
            placeholder="Brand-Name"
            required
          />{' '}
          <br />
          <input
            {...register('name')}
            placeholder="Medicen-Name"
            required
          />{' '}
          <br />
          <input {...register('pawer')} placeholder="Pawer" required /> <br />
          <select
            aria-label="Default select example"
            {...register('type', { required: true })}
          >
            <option>- Type -</option>
            <option value="Tablet">Tablet</option>
            <option value="Syrup">Syrup</option>
            <option value="Capsul">Capsul</option>
            <option value="Others">Others</option>
          </select>{' '}
          <br />
          <input
            type="number"
            {...register('stock')}
            placeholder="Stock"
            required
          />{' '}
          <br />
          <input
            type="number"
            {...register('unitPrice')}
            placeholder="Unit-Price"
            required
          />{' '}
          <br />
          <input
            type="number"
            {...register('salePrice')}
            placeholder="Sale-Price"
            required
          />{' '}
          <br />
          <input {...register('uses')} placeholder="Uses" /> <br />
          <input
            type="submit"
            value="Add New-Product"
            className="add-product-btn"
          />
        </form>
      </div>
    </section>
  );
};

export default AddMedicine;
