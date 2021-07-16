import { ICacheProvider } from '../ICacheProvider';

export class LocalStorageCacheProvider implements ICacheProvider {

	async get<T>(key: string): Promise<T | undefined> {
		const data = localStorage.getItem(key);
		if (!data) return undefined;
		return JSON.parse(data) as T;
	}

	async set(key: string, data: unknown): Promise<void> {
		if (typeof data === 'string') {
			localStorage.setItem(key, data);
		}
		localStorage.setItem(key, JSON.stringify(data));
	}

	async invalidate(key: string): Promise<void> {
		localStorage.removeItem(key);
	}

	async clear(): Promise<void> {
		localStorage.clear();
	}

}