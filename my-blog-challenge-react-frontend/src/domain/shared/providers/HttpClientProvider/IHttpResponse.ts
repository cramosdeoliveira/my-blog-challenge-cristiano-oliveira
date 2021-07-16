export interface IHttpResponse<T> {
	data: T;
	statusCode: number;
}