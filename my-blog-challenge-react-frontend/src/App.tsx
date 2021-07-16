import Footer from './components/footer';
import Header from './components/header';
import { AuthenticationContextProvider } from './hooks/useAuthentication';
import { Routes } from './routes/Routes';

export const App = () => {
	return <AuthenticationContextProvider>
		<Header />
		<main>
			<Routes />
		</main>
		<Footer />
	</AuthenticationContextProvider>
};