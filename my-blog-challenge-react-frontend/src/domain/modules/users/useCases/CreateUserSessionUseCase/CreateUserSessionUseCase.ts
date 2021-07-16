import { API_URL } from '../../../../../consts';
import { ICacheProvider } from '../../../../shared/providers/CacheProvider/ICacheProvider';
import { IHttpClientProvider } from '../../../../shared/providers/HttpClientProvider/IHttpClientProvider';
import { ICreateUserSessionDTO } from '../../dtos/ICreateUserSessionDTO';
import { IUser } from '../../entities/IUser';

export class CreateUserSessionUseCase {

	constructor(
		private httpClientProvider: IHttpClientProvider,
		private cacheProvider: ICacheProvider
	) { }

	async execute(body: ICreateUserSessionDTO): Promise<{ user: IUser, token: string }> {
		const { data } = await this.httpClientProvider.post<{ user: IUser, token: string }>({
			url: `${API_URL}/users/signIn`,
			body
		});
		await this.cacheProvider.set('@@m_blog@@_session', data);
		return data;
	}
}