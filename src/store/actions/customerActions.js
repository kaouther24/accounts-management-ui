import ACTIONS from './actionTypes';
import { getCustomerDetails, createAccount } from '../../services/customer';
import _ from 'lodash'

const getAllCustomerDetails = (customerUuid) => {
	return async (dispatch) => {
		dispatch({ type: ACTIONS.CUSTOMER.GET_CUSTOMER_STARTED });
		try {
			const payload = await getCustomerDetails(customerUuid);
			dispatch({
				type: ACTIONS.CUSTOMER.GET_CUSTOMER_SUCCESS,
				payload
			});
			return payload;
		} catch (error) {
			console.error(`Error creating an account --> ${error}`);
			dispatch({
				type: ACTIONS.CUSTOMER.GET_CUSTOMER_FAILED,
				payload: _.get(error, `response.data.error`, error?.message)
			});
		}
	};
};

const createNewAccount = (customerUuid, initialCredit, customerName) => {
	return async (dispatch) => {
		dispatch({ type: ACTIONS.CUSTOMER.SET_ACCOUNT_STARTED });
		try {
			console.log("insideTry create new account");
			const payload = await createAccount(customerUuid, initialCredit, customerName);
			dispatch({
				type: ACTIONS.CUSTOMER.SET_ACCOUNT_SUCCESS,
				payload
			});
			console.log("payload:  " + payload);
			return payload;
		} catch (error) {
			console.error(`Error creating an account --> ${error}`);
			dispatch({
				type: ACTIONS.CUSTOMER.SET_ACCOUNT_FAILED,
				payload: _.get(error, `response.data.error`, error?.message)
			});
		}
	};
};

export { getAllCustomerDetails, createNewAccount };