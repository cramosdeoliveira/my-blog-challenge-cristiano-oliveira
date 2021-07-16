import { useCallback } from 'react';
import { useEffect } from 'react';
import { FC } from 'react';
import { useContext } from 'react';
import { createContext, useState } from 'react';
import { ICreateUserDTO } from '../domain/modules/users/dtos/ICreateUserDTO';
import { ICreateUserSessionDTO } from '../domain/modules/users/dtos/ICreateUserSessionDTO';
import { IUser } from '../domain/modules/users/entities/IUser';
import { ClearUserSessionUseCaseFactory } from '../domain/modules/users/useCases/ClearUserSession/ClearUserSessionUseCaseFactory';
import { CreateUserUseCaseFactory } from '../domain/modules/users/useCases/CreateUser/CreateUserUseCaseFactory';
import { CreateUserSessionUseCaseFactory } from '../domain/modules/users/useCases/CreateUserSessionUseCase/CreateUserSessionUseCaseFactory';
import { VerifyUserSessionUseCaseFactory } from '../domain/modules/users/useCases/VerifyUserSession/VerifyUserSessionUseCaseFactory';

interface IAuthenticationContext {
	user: IUser | null;
	signed: boolean;
	token: string | null;
	signIn: (data: ICreateUserSessionDTO) => Promise<void>;
	signUp: (data: ICreateUserDTO) => Promise<void>;
	logout: () => Promise<void>;
}

// useCases
const createUserUseCase = CreateUserUseCaseFactory.createUseCase();
const createUserSessionUseCase = CreateUserSessionUseCaseFactory.createUseCase();
const verifyUserSessionUseCase = VerifyUserSessionUseCaseFactory.createUseCase();
const clearUserSessionUseCase = ClearUserSessionUseCaseFactory.createUseCase();

const authenticationContext = createContext({} as IAuthenticationContext);

export const AuthenticationContextProvider: FC = ({ children }) => {
	const [user, setUser] = useState<undefined | null | IUser>(undefined);
	const [token, setToken] = useState<string | null>(null);

	const signIn: IAuthenticationContext['signIn'] = useCallback(async (data) => {
		const { user, token } = await createUserSessionUseCase.execute(data);
		setUser(user);
		setToken(token);
	}, []);

	const signUp: IAuthenticationContext['signUp'] = useCallback(async (data) => {
		await createUserUseCase.execute(data);
	}, []);

	const logout: IAuthenticationContext['logout'] = useCallback(async () => {
		await clearUserSessionUseCase.execute();
		setUser(null);
	}, []);

	useEffect(() => {
		if (user === undefined) {
			verifyUserSessionUseCase.execute().then(resp => {
				if (resp) {
					setUser(resp.user);
					setToken(resp.token);
				} else {
					setUser(null);
				}
			});
		}
	}, [user]);

	if (user === undefined) {
		return null;
	}

	return <authenticationContext.Provider value={{
		user,
		signed: !!user,
		token,
		signIn,
		signUp,
		logout
	}}>
		{children}
	</authenticationContext.Provider>;
};

export const useAuthentication = (): IAuthenticationContext => {
	return useContext(authenticationContext);
};