import {TableRowResultCart} from "./TableRowResultCart";
import {TableRowCart} from "./TableRowCart";
import {useSelector} from "react-redux";

export const TableBodyCart = () => {
	const orderProducts = useSelector(state => state.cartReducer.value)
	return (
		<tbody>
		{orderProducts.map((o, index) => <TableRowCart key={o.id} {...o} index={index}/>)}
		<TableRowResultCart orderProducts={orderProducts}/>
		</tbody>
	)
}