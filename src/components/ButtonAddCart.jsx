import {useDispatch, useSelector} from "react-redux";
import {addCart} from "../reducers/cart/slice";
import {useNavigate} from "react-router-dom";

export const ButtonAddCart = ({id, title, price}) => {
	const size = useSelector(state => state.selectedSizeReducer.value)
	const count = useSelector(state => state.countReducer.value)
	const dispatch = useDispatch()
	const navigate  = useNavigate()

	const onClick = () => {
		if (!size || !count) return
		dispatch(addCart({
			id,
			title,
			size,
			count,
			price,
		}))
		navigate('/cart')
	}

	return (
		<button className="btn btn-danger btn-block btn-lg" disabled={!count}
				onClick={onClick}>
			В корзину
		</button>
	)
}