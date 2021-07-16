export interface ICacheProvider {
	get<T>(key: string): Promise<T | undefined>;
	set(key: string, data: unknown): Promise<void>;
	invalidate(key: string): Promise<void>;
	clear(): Promise<void>;
}