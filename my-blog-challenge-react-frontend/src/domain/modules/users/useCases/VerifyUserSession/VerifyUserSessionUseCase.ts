import { ICacheProvider } from '../../../../shared/providers/CacheProvider/ICacheProvider';
import { IUser } from '../../entities/IUser';

interface ITokenAndUser {
	user: IUser;
	token: string;
}

export class VerifyUserSessionUseCase {

	constructor(
		private cacheProvider: ICacheProvider
	) { }

	async execute(): Promise<ITokenAndUser | null> {
		return (await this.cacheProvider.get('@@m_blog@@_session')) || null;
	}
}