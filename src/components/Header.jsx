import { NavLink } from 'react-router-dom';
import { Menu } from './Menu';
import headerLogo from '../assets/img/header-logo.png';

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
							<div>
								<div className="header-controls-pics">
									<div data-id="search-expander"
										 className="header-controls-pic header-controls-search"></div>
									<div
										className="header-controls-pic header-controls-cart">
										<div
											className="header-controls-cart-full">1
										</div>
										<div
											className="header-controls-cart-menu"></div>
									</div>
								</div>
								<form data-id="search-form"
									  className="header-controls-search-form form-inline invisible">
									<input className="form-control"
										   placeholder="Поиск"/>
								</form>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	)
}