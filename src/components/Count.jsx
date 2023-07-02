import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, setCount} from "../reducers/count/slice";
import {useEffect} from "react";

export const Count = () => {
	const count = useSelector(state => state.countReducer.value)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setCount(0))
	}, [dispatch])

	const onIncrement = () => {
		if (count >= 10) return
		dispatch(increment())
	}

	const onDecrement = () => {
		if (count <= 1) return
		dispatch(decrement())
	}

	return (
		<p>Количество:{' '}
			<span className="btn-group btn-group-sm pl-2">
				<button className="btn btn-secondary" onClick={onDecrement}>-</button>
				<span className="btn btn-outline-primary">{count}</span>
				<button className="btn btn-secondary" onClick={onIncrement}>+</button>
			</span>
		</p>
	)
}