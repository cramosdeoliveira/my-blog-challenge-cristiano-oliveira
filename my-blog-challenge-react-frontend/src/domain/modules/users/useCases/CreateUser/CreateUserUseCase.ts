import { API_URL } from '../../../../../consts';
import { IHttpClientProvider } from '../../../../shared/providers/HttpClientProvider/IHttpClientProvider';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUser } from '../../entities/IUser';

export class CreateUserUseCase {

	constructor(
		private httpClientProvider: IHttpClientProvider
	) { }

	async execute({ email, name, password, avatar }: ICreateUserDTO): Promise<IUser> {
		const { data } = await this.httpClientProvider.post<IUser>({
			url: `${API_URL}/users`,
			body: {
				email,
				name,
				password
			}
		});
		if (avatar) {
			const { data: { token } } = await this.httpClientProvider.post<{ token: string }>({
				url: `${API_URL}/users/signIn`,
				body: {
					email,
					password
				}
			});
			const formData = new FormData();
			formData.append('avatar', avatar);
			await this.httpClientProvider.patch({
				url: `${API_URL}/users/updateAvatar`,
				body: formData,
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
		}
		return data;
	}
}