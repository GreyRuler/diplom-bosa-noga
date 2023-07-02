import { NavLink } from 'react-router-dom';
import { Menu } from './Menu';
import headerLogo from '../assets/img/header-logo.png';
import {HeaderControls} from "./HeaderControls";

export const Header = () => {

	return (
		<header className="container">
			<div className="row">
				<div className="col">
					<nav className="navbar navbar-expand-sm navbar-light bg-light">
						<NavLink to="/home" className="navbar-brand">
							<img src={headerLogo} alt="Bosa Noga"/>
						</NavLink>
						<div className="collapase navbar-collapse" id="navbarMain">
							<Menu/>
							<HeaderControls/>
						</div>
					</nav>
				</div>
			</div>
		</header>
	)
}
