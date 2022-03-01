import React from 'react';
import './PaymentForm.css';

const PaymentForm = () => {
    return (
        <div class="container mt-5 px-5">
            <div class="mb-4">
                <h2>Confirm order and pay</h2> <span>please make the payment, after that you can enjoy all the features and benefits.</span>
            </div>
            <form class="row">
                <div class="col-md-12">
                    <div class="card p-3">
                        <h6 class="text-uppercase">Payment details</h6>
                        <div class="inputbox mt-3"> <input type="text" name="name" class="form-control" required="required" /> <span>Name on card</span> </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <i class="fa fa-credit-card" ></i> <span>Card Number</span> </div>
                            </div>
                            <div class="col-md-6">

                                <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <span>Month</span>
                                </div>
                            </div>
                            <div class="col-md-6">

                                <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <span>Year</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <span>CVV</span> </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 mb-4 d-flex justify-content-between"><button class="btn btn-success w-100 mx-5 px-3">Confirm</button> </div>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;