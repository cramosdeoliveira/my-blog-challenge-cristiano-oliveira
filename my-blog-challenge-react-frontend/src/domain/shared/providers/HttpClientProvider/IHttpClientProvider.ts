import { IHttpNoBodyRequest } from './IHttpNoBodyRequest';
import { IHttpRequest } from './IHttpRequest';
import { IHttpResponse } from './IHttpResponse';

export interface IHttpClientProvider {
	get<T>(data: IHttpNoBodyRequest): Promise<IHttpResponse<T>>;
	post<T>(data: IHttpRequest): Promise<IHttpResponse<T>>;
	put<T>(data: IHttpRequest): Promise<IHttpResponse<T>>;
	patch<T>(data: IHttpRequest): Promise<IHttpResponse<T>>;
	delete<T>(data: IHttpNoBodyRequest): Promise<IHttpResponse<T>>;
}