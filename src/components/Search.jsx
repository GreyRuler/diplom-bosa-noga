import useOnInput from "../hooks/useOnInput";
import {useSelector} from "react-redux";

export const Search = () => {
    const onInput = useOnInput()
    const query = useSelector(state => state.catalogReducer.value.q)
    return (
        <form className="catalog-search-form form-inline">
            <input className="form-control" placeholder="Поиск" onInput={onInput}
                   value={query}/>
        </form>
    )
}