import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Big from 'big.js';
import { createNewAccount } from '../store/actions/customerActions';
import _ from 'lodash';

const NewAccountForm = () => {
  const [customerUuid, setCustomerUuid] = useState('');
  const [balance, setBalance] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => _.get(state, "customer.newAccount.error"));
  const isNewAccountCreated = useSelector((state) => _.get(state, "customer.isNewAccountCreated"));
  const isNewAccountLoading = useSelector((state) => _.get(state, "customer.isNewAccountLoading"));

  const handleSubmit = async (event) => {
    event.preventDefault();
    const balanceFormatted = new Big(balance);
    await dispatch(createNewAccount(customerUuid, balanceFormatted.toString(), name));
  };
  useEffect(() => {
    if (isNewAccountCreated) {
      // Reset the form fields
      setCustomerUuid('');
      setBalance('');
      setName('');
    }
  }, [isNewAccountCreated]);
  return (
    <div>
      <h2>Create a New Account for Existing Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Customer UUID:</label>
          <input
            type="text"
            value={customerUuid}
            onChange={(e) => setCustomerUuid(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Balance:</label>
          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Account</button>


        {/* Loading state */}
        {isNewAccountLoading && <p>Loading...</p>}
        {/* Error state */}
        {error && <p>Error: {error}</p>}
        {/* Success state */}
        {isNewAccountCreated && <p> The new account was created with success</p>}
      </form>
    </div>
  );
};

export default NewAccountForm;
