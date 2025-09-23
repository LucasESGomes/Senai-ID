import axios from 'axios';

const api = axios.create({
	  baseURL: 'https://senai-id-1.onrender.com/api/v1',
});

export const setAuthToken = (token) => {
	if (token) {
		api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete api.defaults.headers.common['Authorization'];
	}
}

export default api;