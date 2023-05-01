import React, { useEffect, useRef, useState } from 'react';
import { Table } from 'react-bootstrap';
import { HiLocationMarker, HiMail, HiPhoneMissedCall } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

const PdfInvoice = () => {
  const [itemdata, setData] = useState({});
  console.log(itemdata);
  const { id } = useParams();
  useEffect(() => {
    fetch('https://sigma-hospital-server.onrender.com/order')
      .then((res) => res.json())
      .then((data) => {
        const Order = data.find((data) => data?._id === `${id}`);
        setData(Order);
      });
  }, [id]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="pdfinvoice" id="pdfbody">
      <div className="print-div">
        <button className="Print-btn" onClick={handlePrint}>
          Print
        </button>
      </div>

      <div className="pdf-body" ref={componentRef}>
        <div className="container invoice-body" id="printdata">
          <section className="invoice-header">
            <div>
              <h4 className="invoice">Invoice</h4>
            </div>
            <div className="hospital-info">
              <h6>
                {' '}
                <img
                  src="https://i.ibb.co/hRX83Sc/logo.png"
                  className="image-pdf-logo"
                  alt=""
                />{' '}
                Hospial
              </h6>
              <div c>
                <p>
                  {' '}
                  <HiLocationMarker />
                  1234 North Avenue Luke, South Bend,IN 360001
                </p>
                <p>
                  <HiPhoneMissedCall />
                  +8801629094984
                </p>
                <p>
                  {' '}
                  <HiMail />
                  support@gmail.com
                </p>
              </div>
            </div>
          </section>
          <section className="customer-info">
            <div>
              <h4>Build To</h4>
              <p>Name: {itemdata?.data?.cusName}</p>
              <p>Address: {itemdata?.data?.cusAddress}</p>
              <p>Phone Number: {itemdata?.data?.cusNumber}</p>
              <p>Country: {itemdata?.data?.cus_country}</p>
              <p>Payment Status: {itemdata?.data?.paymentStatus}</p>
            </div>

            <div>
              <h4>Invoice Number</h4>
              <p>{itemdata?._id}</p>
            </div>
          </section>
          <section className="product-info">
            <Table>
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Product Name</th>
                  <th>Brand</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {itemdata.item?.slice(1).map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item?.name}</td>
                    <td>{item?.brand}</td>
                    <td>{item?.type}</td>
                    <td>{item?.price}</td>
                    <td>{item?.quantity}</td>
                    <td>{item?.Total} /-</td>
                  </tr>
                ))}

                <tr>
                  <td className="g-total-pdf" colSpan={6}>
                    Grand Total
                  </td>
                  <td className="g-total-pdf">
                    {itemdata.data?.total_amount}.TK
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>

          <section className="product-info">
            <div className="thank-mas">
              <p>Mr/Ms {itemdata?.data?.cusName}</p>
              <small>
                Thank you for being our valued customer. We are so grateful for
                the pleasure of serving you and hope we met your expectations.
              </small>
            </div>
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PdfInvoice;
