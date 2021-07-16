import { IUser } from '../entities/IUser';

export type ICreateUserDTO = Pick<IUser, 'email' | 'name' | 'password'> & {
	avatar?: File;
};