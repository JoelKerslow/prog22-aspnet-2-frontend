import React from 'react';
import BackArrow from '../partials/generalPartials/BackArrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const PaymentMethod = () => {
    return (
        <>
            <div className="RegHeader">
                <BackArrow />
                <h3>Payment Methods</h3>
            </div>
            <div className="container mt-4">
                <div className="row align-items-center justify-content-between">
                    <div className="col-8">Cards</div>
                    <div className="text-end">
                        <span>Add new card </span>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
                <div className="card my-3">
                    <div className="card-body">
                        <FontAwesomeIcon icon={faCreditCard} className="me-2" />
                        **** **** **** ****
                        <br/>
                        John Doe
                    </div>
                </div>
                <div className="payment-wrapper row align-items-center justify-content-between">
                    <div className="col-8">Apple Pay</div>
                    <div className="text-end">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
                <div className="payment-wrapper row align-items-center justify-content-between">
                    <div className="col-8">PayPal</div>
                    <div className="text-end">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
                <div className="payment-wrapper row align-items-center justify-content-between">
                    <div className="col-8">Payoneer</div>
                    <div className="text-end">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaymentMethod;
