import { AxiosHttpClientProvider } from '../../../../shared/providers/HttpClientProvider/infra/AxiosHttpClientProvider';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserUseCaseFactory {
	static createUseCase(): CreateUserUseCase {
		const httpClientProvider = new AxiosHttpClientProvider();
		return (new CreateUserUseCase(httpClientProvider));
	}
}