import classNames from 'classnames';

export const classnamesMenuItem = ({isActive}) => classNames({
	'nav-link': true,
	'active': isActive
})
