import { LocalStorageCacheProvider } from '../../../../shared/providers/CacheProvider/infra/LocalStorageCacheProvider';
import { ClearUserSessionUseCase } from './ClearUserSessionUseCase';

export class ClearUserSessionUseCaseFactory {
	static createUseCase(): ClearUserSessionUseCase {
		const cacheProvider = new LocalStorageCacheProvider();
		return (new ClearUserSessionUseCase(cacheProvider));
	}
}