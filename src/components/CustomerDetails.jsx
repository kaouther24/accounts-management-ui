import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCustomerDetails } from '../store/actions/customerActions';
import _ from 'lodash';

const CustomerDetails = () => {
    const [customerUuid, setCustomerUuid] = useState('');
    const dispatch = useDispatch();

    // Accessing customer data, loading state, and error state from Redux store
    const customer = useSelector((state) => _.get(state, "customer.details.customer"));
    const accounts = useSelector((state) => _.get(state, "customer.details.accounts"));
    const isLoading = useSelector((state) => _.get(state, "customer.isLoading"));
    const error = useSelector((state) => _.get(state, "customer.details.error"));

    // Function to handle search when the button is clicked
    const handleSearch = async () => {
        if (customerUuid) {
            await dispatch(getAllCustomerDetails(customerUuid));
        }
    };

    return (
        <div>
            <h2>Get Customer Details</h2>
            <div>
                <label>Customer UUID:</label>
                <input
                    type="text"
                    value={customerUuid}
                    onChange={(e) => setCustomerUuid(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>

                {/* Loading state */}
                {isLoading && <p>Loading...</p>}

                {/* Error state */}
                {error && <p>Error: {error}</p>}

                {/* Display customer details if data is available */}
                {customer && Object.keys(customer).length > 0 ? (
                    <div>
                        <h3>Customer Name: {customer.name}</h3>
                        <p>Account Details:</p>
                        {accounts && accounts.length > 0 ? (
                            <ul>
                                {accounts.map((account) => (
                                    <li key={account.uuid}>
                                        <p>Account Number: {account.uuid}, Balance: {account.balance}</p>
                                        {account.transactions && account.transactions.length > 0 ? (
                                            <ul>
                                                {account.transactions.map((transaction) => (
                                                    <li key={transaction.uuid}>
                                                        Transaction ID: {transaction.uuid}, Amount: {transaction.amount}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>No transactions found for this account.</p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No accounts found for this customer.</p>
                        )}
                    </div>
                ) : (
                    <p>No customer details found. Please enter a valid UUID.</p>
                )}
            </div>
        </div>
    );

};

export default CustomerDetails;