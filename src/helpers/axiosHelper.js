import axios from 'axios';


function mergeObjects(obj1, obj2) {
	if (typeof obj1 !== 'object') {
		obj1 = {};
	}
	if (typeof obj2 !== 'object') {
		return obj1;
	}
	return { ...obj1, ...obj2 };
}

function get(url, options = {}) {
	options = mergeObjects(options, { url, method: 'GET' });
	return axios(options).then((response) => {
		return response.data;
	});
}

function post(url, payload, options = {}) {
	options = mergeObjects(options, {
		method: 'POST',
		data: payload,
		cache: false,
		url
	});
	return axios(options).then((response) => {
		return response.data;
	});
}

export default {
	get,
	post
}