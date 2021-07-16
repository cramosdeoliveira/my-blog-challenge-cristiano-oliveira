export interface IUser {
	id: number;
	name: string;
	email: string;
	password?: string;
	avatarURL: string | null;
}