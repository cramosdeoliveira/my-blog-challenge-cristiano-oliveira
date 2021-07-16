import { IHttpBody } from './IHttpBody';
import { IHttpNoBodyRequest } from './IHttpNoBodyRequest';

export interface IHttpRequest extends IHttpNoBodyRequest {
	body?: IHttpBody;
}