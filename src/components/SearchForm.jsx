import useOnInput from "../hooks/useOnInput";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const SearchForm = () => {
	const onInput = useOnInput()
	const navigate = useNavigate()
	const query = useSelector(state => state.catalogReducer.value.q)
	const onSubmit = (e) => {
		e.preventDefault()
		navigate('/catalog')
	}

	return (
		<form data-id="search-form" onSubmit={onSubmit}
			  className="header-controls-search-form form-inline invisible">
			<input className="form-control" onInput={onInput}
				   placeholder="Поиск" value={query}/>
		</form>
	)
}