import React, { useEffect, useState } from 'react';
import './Charts.css';

const Charts = () => {
  const [apositive, setApositive] = useState([]);
  const [bpositive, setBpositive] = useState([]);
  const [opositive, setOpositive] = useState([]);
  const [abpositive, setAbpositive] = useState([]);

  const [anegative, setAnegative] = useState([]);
  const [bnegative, setBnegative] = useState([]);
  const [onegative, setOnegative] = useState([]);
  const [abnegative, setAbnegative] = useState([]);

  // https://sigma-hospital-server.onrender.com/

  //////load data//
  useEffect(() => {
    fetch('https://sigma-hospital-server.onrender.com/donors')
      .then((res) => res.json())
      .then((donors) => {
        console.log(donors);

        const donorsData = donors.filter((data) => data?.status === 'Approved');
        console.log(donorsData);

        const aPositive = donorsData.filter((d) => d?.bloodGroup === 'A+');
        setApositive(aPositive);
        const singlebloodgroup = donorsData.filter(
          (d) => d?.bloodGroup === 'B+'
        );
        setBpositive(singlebloodgroup);
        const oposi = donorsData.filter((d) => d?.bloodGroup === 'O+');
        setOpositive(oposi);
        const abposi = donorsData.filter((d) => d.bloodGroup === 'AB+');
        setAbpositive(abposi);

        const Anegative = donorsData.filter((d) => d?.bloodGroup === 'A-');
        setAnegative(Anegative);

        const Bnegative = donorsData.filter((d) => d?.bloodGroup === 'B-');
        setBnegative(Bnegative);

        const Onegativea = donorsData.filter((d) => d?.bloodGroup === 'O-');
        setOnegative(Onegativea);

        const Abnegative = donorsData.filter((d) => d?.bloodGroup === 'AB-');
        setAbnegative(Abnegative);
      });
  }, []);
  ////load data///
  return (
    <div>
      <h2>Bloods in stock</h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-4">
        <div className="col">
          <div className="col stock-card">
            <div className="p-1">
              <i class="fas fa-burn blood-icon"></i>
              <span className="blood"> &nbsp;A+</span>
              <p className="count">
                In Stock : <span className="stock">{apositive.length} </span>
                Bag(s)
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col stock-card">
            <div className="p-1">
              <i class="fas fa-burn blood-icon"></i>
              <span className="blood"> &nbsp;B+</span>
              <p className="count">
                In Stock : <span className="stock">{bpositive.length} </span>
                Bag(s)
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col stock-card">
            <div className="p-1">
              <i class="fas fa-burn blood-icon"></i>
              <span className="blood"> &nbsp;O+</span>
              <p className="count">
                In Stock : <span className="stock">{opositive.length} </span>
                Bag(s)
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col stock-card">
            <div className="p-1">
              <i class="fas fa-burn blood-icon"></i>
              <span className="blood"> &nbsp;AB+</span>
              <p className="count">
                In Stock : <span className="stock">{abpositive.length} </span>
                Bag(s)
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col stock-card">
            <div className="p-1">
              <i class="fas fa-burn blood-icon"></i>
              <span className="blood"> &nbsp;A-</span>
              <p className="count">
                In Stock : <span className="stock">{anegative.length} </span>
                Bag(s)
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col stock-card">
            <div className="p-1">
              <i class="fas fa-burn blood-icon"></i>
              <span className="blood"> &nbsp;B-</span>
              <p className="count">
                In Stock : <span className="stock">{bnegative.length} </span>
                Bag(s)
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col stock-card">
            <div className="p-1">
              <i class="fas fa-burn blood-icon"></i>
              <span className="blood"> &nbsp;O-</span>
              <p className="count">
                In Stock : <span className="stock">{onegative.length} </span>
                Bag(s)
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col stock-card">
            <div className="p-1">
              <i class="fas fa-burn blood-icon"></i>
              <span className="blood"> &nbsp;AB-</span>
              <p className="count">
                In Stock : <span className="stock">{abnegative.length} </span>
                Bag(s)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
