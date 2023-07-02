import useOnInput from "../hooks/useOnInput";

export const SearchForm = () => {
	const onInput = useOnInput()
	return (
		<form data-id="search-form"
			  className="header-controls-search-form form-inline invisible">
			<input className="form-control" onInput={onInput}
				   placeholder="Поиск"/>
		</form>
	)
}