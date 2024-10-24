import ACTIONS from '../actions/actionTypes';

export default (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.CUSTOMER.GET_CUSTOMER_STARTED:
			return { ...state, isLoading: true };
		case ACTIONS.CUSTOMER.GET_CUSTOMER_SUCCESS:
			return { ...state, details: action.payload, isLoading: false };
		case ACTIONS.CUSTOMER.GET_CUSTOMER_FAILED:
			return { ...state, details: { error: action.payload }, isLoading: false };
		case ACTIONS.CUSTOMER.SET_ACCOUNT_STARTED:
			return { ...state, isNewAccountLoading: true, isNewAccountCreated: false };
		case ACTIONS.CUSTOMER.SET_ACCOUNT_SUCCESS:
			return { ...state, isNewAccountCreated: true, isNewAccountLoading: false };
		case ACTIONS.CUSTOMER.SET_ACCOUNT_FAILED:
			return { ...state, newAccount: { error: action.payload } };
		default:
			return state;
	}
};