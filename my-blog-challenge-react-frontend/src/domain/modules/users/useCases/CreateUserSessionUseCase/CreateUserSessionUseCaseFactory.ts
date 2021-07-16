import { LocalStorageCacheProvider } from '../../../../shared/providers/CacheProvider/infra/LocalStorageCacheProvider';
import { AxiosHttpClientProvider } from '../../../../shared/providers/HttpClientProvider/infra/AxiosHttpClientProvider';
import { CreateUserSessionUseCase } from './CreateUserSessionUseCase';

export class CreateUserSessionUseCaseFactory {
	static createUseCase(): CreateUserSessionUseCase {
		const httpClientProvider = new AxiosHttpClientProvider();
		const cacheProvider = new LocalStorageCacheProvider();
		return (new CreateUserSessionUseCase(httpClientProvider, cacheProvider));
	}
}