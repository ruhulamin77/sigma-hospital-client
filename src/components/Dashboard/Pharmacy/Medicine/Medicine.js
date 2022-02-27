import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Table } from 'react-bootstrap';
// import { useForm } from "react-hook-form";
import {
  addToCart,
//   clearCart,
//   decreaseCart,
  getTotals,
//   removeFromCart,
} from "../../../../features/cartSlice";
import './Medicine.css'
const Medicine = () => {
    const [medicines, setMedicines] = useState([])
    useEffect(() => {
        fetch("https://shrouded-headland-44423.herokuapp.com/medicine")
            .then(res => res.json())
            .then(data => setMedicines(data))
    }, [])

    return (
        <div className='container mt-5 mb-5'>
            <div>
                {/* {medicines?.map((medicine, index) => (
                    <form >
                        <input type="text" value={medicine?.brand} readOnly />
                        <input type="text" value={medicine?.name} readOnly />
                        <input type="text" value={medicine?.pawer[0]} readOnly />
                        <input type="text" value={medicine?.stock} readOnly />
                        <input type="text" value={medicine?.salePrice} readOnly />
                        <input type="text" onChange={handelquantity} />
                        <input type="text" defaultValue="0" value={medicine?.salePrice * quantity} readOnly />
                    </form>




                ))} */}

                <Table striped bordered hover size="sm" className=' mt-5'>
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>brand</th>
                            <th>Medicine-Name</th>
                            <th>pawer</th>
                            <th>type</th>
                            <th>stock</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicines?.map((medicine, index) => (
                            <TableRow medicine={medicine}
                                index={index}

                            ></TableRow>

                        ))}

                    </tbody>
                </Table>
            </div>

        </div >
    );
};

export default Medicine;

const TableRow = ({ medicine, index }) => {

    const [quantity, setQuantity] = useState(null);

    const handelquantity = (e) => {
        console.log(e)
        const Quantity = e.target.value;
        setQuantity(Quantity)
    }
    const cart = useSelector((state) => state.medicine);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals(quantity)); 
  };
//   const handleDecreaseCart = (product) => {
//     dispatch(decreaseCart(product));
//   };
//   const handleRemoveFromCart = (product) => {
//     dispatch(removeFromCart(product));
//   };
//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };
    return <tr>
        <td>{index + 1}</td>
        <td>{medicine?.brand}</td>
        <td>{medicine?.name}</td>
        <td>{medicine?.pawer[0]}</td>
        <td>{medicine?.type[0]}</td>
        <td>{medicine?.stock}</td>
        <td>{medicine?.salePrice}</td>
        <td><input type="text" onChange={handelquantity} id={medicine._id} /></td>
        <td>{medicine?.salePrice * quantity}</td>
        <td><button onClick={() => handleAddToCart(medicine)}>Add</button></td>

    </tr>
}