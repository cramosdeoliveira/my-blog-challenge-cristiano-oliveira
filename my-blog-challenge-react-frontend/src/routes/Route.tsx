import { FC } from 'react';
import { Route as DomRouter, RouteProps } from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuthentication';
import Login from '../pages/login';
import Posts from '../pages/posts';

interface IRouterProps extends RouteProps {
	isPrivate?: boolean;
}

export const Route: FC<IRouterProps> = ({ isPrivate = false, ...rest }) => {

	const { signed } = useAuthentication();

	if (!signed && isPrivate) {
		return <DomRouter {...rest} component={Login} />;
	}

	if (signed && !isPrivate) {
		return <DomRouter {...rest} component={Posts} />;
	}

	return <DomRouter {...rest} />;
};