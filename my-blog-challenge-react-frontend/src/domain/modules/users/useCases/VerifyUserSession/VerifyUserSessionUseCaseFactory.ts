import { LocalStorageCacheProvider } from '../../../../shared/providers/CacheProvider/infra/LocalStorageCacheProvider';
import { VerifyUserSessionUseCase } from './VerifyUserSessionUseCase';

export class VerifyUserSessionUseCaseFactory {
	static createUseCase(): VerifyUserSessionUseCase {
		const cacheProvider = new LocalStorageCacheProvider();
		return (new VerifyUserSessionUseCase(cacheProvider));
	}
}