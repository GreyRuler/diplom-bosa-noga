import {useDispatch} from "react-redux";
import {orderRequest} from "../reducers/order/slice";

export const ButtonSubmitOrder = () => {
	const dispatch = useDispatch()

	const onClick = () => {
		dispatch(orderRequest())
	}
	return (
		<button type='button' className="btn btn-outline-secondary"
				onClick={onClick}>
			Оформить
		</button>
	)
}
