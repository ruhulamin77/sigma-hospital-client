import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getTotals } from '../../../../features/cartSlice';
const TableRow = ({ medicine, index }) => {

    const [quantity, setQuantity] = useState('');
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        reset(data)
        handleAddToCart(data)
        axios.put(`http://localhost:7050/medicine/order/${data._id}`, {
            stock: { data },
        })
            .then((data) => {
            })
            .catch((err) => {
                console.log(err);

            });
    };

    const handelquantity = (e) => {
        const Quantity = e.target.value;
        setQuantity(Quantity)
        onSubmit()
    }

    const cart = useSelector((state) => state.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        dispatch(getTotals(quantity));
    };


    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{medicine?.brand}</td>
                <td>{medicine?.name}</td>
                <td>{medicine?.pawer}</td>
                <td>{medicine?.type}</td>
                <td className={medicine?.stock === 0 ? "stockOut" : " "}>{medicine?.stock}</td>
                <td>{medicine?.salePrice}</td>
                <td className='quantity'><input type="text" onChange={handelquantity} id={medicine._id} className='medicen-input-fild' /></td>
                <td className='quantity'><input type="number" readOnly value={medicine?.salePrice * quantity} className='medicen-input-fild' /></td>
                <td>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" {...register("_id")} value={medicine?._id} />
                        <input type="hidden" {...register("brand")} value={medicine?.brand} />
                        <input type="hidden" {...register("name")} value={medicine?.name} />
                        <input type="hidden" {...register("pawer")} value={medicine?.pawer} />
                        <input type="hidden" {...register("type")} value={medicine?.type} />
                        <input type="hidden" {...register("price")} value={medicine?.salePrice} />
                        <input type="hidden"  {...register("quantity")} value={quantity} />
                        <input type="hidden"  {...register("Total")} value={(medicine?.salePrice) * (quantity)} />
                        <input type="submit" value="Add-Cart" className='Add-Cart' />

                    </form>
                </td>



            </tr>

        </>


    );
};

export default TableRow;