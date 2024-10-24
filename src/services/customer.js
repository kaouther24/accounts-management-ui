import axiosHelper from '../helpers/axiosHelper';


const CREATE_ACCOUNT_URL = 'http://localhost:8084/account/newAccount';

const CUSTOMER_DETAILS_URL = 'http://localhost:8084/customer/details/:customerUuid';

function getCustomerDetails(uuid) {
	const url = CUSTOMER_DETAILS_URL.replace(':customerUuid', uuid);
	return axiosHelper.get(url);
}


function createAccount(customerUuid, balance, customerName) {
	const payload = {
		balance,
		customerUuid,
		customerName
	}

	return axiosHelper.post(CREATE_ACCOUNT_URL, payload);
}

export {
	getCustomerDetails,
	createAccount
};