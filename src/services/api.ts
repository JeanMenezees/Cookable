import axios from 'axios';

export class ApiService { 
	static async get<T>(url: string): Promise<T> {
		return axios.get(url).then(response => {
			const result = response.data as T;

			return result;
		});
	}
}