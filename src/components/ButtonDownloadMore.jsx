import {useDispatch} from "react-redux";
import {catalogChangeOffset} from "../reducers/catalog/slice";

export const ButtonDownloadMore = () => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(catalogChangeOffset())
    }

    return (
        <div className="text-center">
            <button className="btn btn-outline-primary" onClick={onClick}>
                Загрузить ещё
            </button>
        </div>
    )
}