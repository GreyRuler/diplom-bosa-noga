import { NavLink } from 'react-router-dom';
import { classnamesMenuItem } from '../utils/classnames';

export const Menu = () => {

	return (
		<ul className="navbar-nav mr-auto">
			<li className="nav-item">
				<NavLink to='/home' className={classnamesMenuItem}>
					Главная
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to='/catalog' className={classnamesMenuItem}>
					Каталог
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to='/about' className={classnamesMenuItem}>
					О магазине
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to='/contacts' className={classnamesMenuItem}>
					Контакты
				</NavLink>
			</li>
		</ul>
	)
}
