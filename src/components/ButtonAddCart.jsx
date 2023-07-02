import {useDispatch, useSelector} from "react-redux";
import {addCart} from "../reducers/cart/slice";

export const ButtonAddCart = ({id, title, price}) => {
	const size = useSelector(state => state.selectedSizeReducer.value)
	const count = useSelector(state => state.countReducer.value)
	const dispatch = useDispatch()

	const onClick = () => {
		if (!size) return
		dispatch(addCart({
			id,
			title,
			size,
			count,
			price,
		}))
	}

	return (
		<button className="btn btn-danger btn-block btn-lg"
				onClick={onClick}>
			В корзину
		</button>
	)
}