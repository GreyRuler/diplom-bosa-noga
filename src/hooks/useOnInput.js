import {useDispatch} from "react-redux";
import {catalogChangeQ} from "../reducers/catalog/slice";

export default function useOnInput() {
    const dispatch = useDispatch()
    return (e) => {
        console.log(e.target.value)
        dispatch(catalogChangeQ(e.target.value))
    }
}
