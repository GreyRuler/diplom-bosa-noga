import useOnInput from "../hooks/useOnInput";

export const Search = () => {
	const onInput = useOnInput()
	return (
		<form className="catalog-search-form form-inline">
			<input className="form-control" placeholder="Поиск" onInput={onInput}/>
		</form>
	)
}