import { IUser } from '../entities/IUser';

export type ICreateUserSessionDTO = Pick<IUser, 'email' | 'password'>;