import { IHttpHeaders } from './IHttpHeaders';
import { IHttpParams } from './IHttpParams';

export interface IHttpNoBodyRequest {
	url: string;
	headers?: IHttpHeaders;
	params?: IHttpParams;
}