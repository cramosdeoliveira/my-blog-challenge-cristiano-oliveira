import user1 from '../assets/img/user-1.png';
import { useAuthentication } from '../hooks/useAuthentication';

function Header() {

	const { user, signed, logout } = useAuthentication();

	return (
		<header>
			<div className="container">
				<figure className="logotype"></figure>
				<div className="user-header-profile">
					{signed && <button className="button type-3" onClick={() => logout()}><span>sair</span></button>}
					<figure className="user">
						<img src={user?.avatarURL || user1} alt="User-1" />
					</figure>
				</div>
			</div>
		</header>
	)
}

export default Header;