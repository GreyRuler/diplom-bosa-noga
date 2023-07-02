import {useDispatch} from "react-redux";
import {removeCart} from "../reducers/cart/slice";

export const ButtonRemoveCart = ({id}) => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(removeCart(id))
    }

    return (
        <button className="btn btn-outline-danger btn-sm"
                onClick={onClick}>
            Удалить
        </button>
    )
}