import { IHttpClientProvider } from '../IHttpClientProvider';
import { IHttpNoBodyRequest } from '../IHttpNoBodyRequest';
import { IHttpRequest } from '../IHttpRequest';
import { IHttpResponse } from '../IHttpResponse';
import axios, { AxiosError } from 'axios';
import { AppError } from '../../../errors/AppError';

const api = axios.create();

export class AxiosHttpClientProvider implements IHttpClientProvider {

	async get<T>({ url, params, headers }: IHttpNoBodyRequest): Promise<IHttpResponse<T>> {
		try {
			const { data, status } = await api.get(url, {
				params,
				headers
			});

			return {
				data,
				statusCode: status
			};
		} catch (error) {
			const axiosError: AxiosError = error;
			throw new AppError(axiosError.response?.data || 'Unknown error', axiosError.response?.status || 500)
		}
	}

	async post<T>({ url, body, params, headers }: IHttpRequest): Promise<IHttpResponse<T>> {
		try {
			const { data, status } = await api.post(url, body || {}, {
				params,
				headers
			});

			return {
				data,
				statusCode: status
			};
		} catch (error) {
			const axiosError: AxiosError = error;
			throw new AppError(axiosError.response?.data || 'Unknown error', axiosError.response?.status || 500)
		}
	}

	async put<T>({ url, body, params, headers }: IHttpRequest): Promise<IHttpResponse<T>> {
		try {
			const { data, status } = await api.put(url, body || {}, {
				params,
				headers
			});

			return {
				data,
				statusCode: status
			};
		} catch (error) {
			const axiosError: AxiosError = error;
			throw new AppError(axiosError.response?.data || 'Unknown error', axiosError.response?.status || 500)
		}
	}

	async patch<T>({ url, body, params, headers }: IHttpRequest): Promise<IHttpResponse<T>> {
		try {
			const { data, status } = await api.patch(url, body || {}, {
				params,
				headers
			});

			return {
				data,
				statusCode: status
			};
		} catch (error) {
			const axiosError: AxiosError = error;
			throw new AppError(axiosError.response?.data || 'Unknown error', axiosError.response?.status || 500)
		}
	}

	async delete<T>({ url, params, headers }: IHttpNoBodyRequest): Promise<IHttpResponse<T>> {
		try {
			const { data, status } = await api.delete(url, {
				params,
				headers
			});

			return {
				data,
				statusCode: status
			};
		} catch (error) {
			const axiosError: AxiosError = error;
			throw new AppError(axiosError.response?.data || 'Unknown error', axiosError.response?.status || 500)
		}
	}

}