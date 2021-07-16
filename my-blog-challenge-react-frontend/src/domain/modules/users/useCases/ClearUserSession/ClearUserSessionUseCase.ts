import { ICacheProvider } from '../../../../shared/providers/CacheProvider/ICacheProvider';

export class ClearUserSessionUseCase {

	constructor(
		private cacheProvider: ICacheProvider
	) { }

	async execute() {
		this.cacheProvider.clear();
	}
}