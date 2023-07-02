export const SearchHeader = () => {
	const onClick = () => {
		const searchFormEl = document.querySelector('[data-id=search-form]');
		searchFormEl.classList.toggle('invisible');
		searchFormEl.querySelector('input').focus();
	}

	return (
		<div data-id="search-expander" onClick={onClick}
			 className="header-controls-pic header-controls-search"></div>
	)
}