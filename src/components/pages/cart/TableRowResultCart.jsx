import {formatPrice} from "../../../utils/formatPrice";

export const TableRowResultCart = ({orderProducts}) => {
	const result = orderProducts.reduce((result, curr) => (
		result + curr.price * curr.count
	), 0)
	return (
		<tr>
			<td colSpan="5" className="text-right">Общая стоимость</td>
			<td>{`${formatPrice(result)} руб.`}</td>
		</tr>
	)
}