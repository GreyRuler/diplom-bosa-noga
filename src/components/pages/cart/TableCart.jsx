import {TableHeadCart} from "./TableHeadCart";
import {TableBodyCart} from "./TableBodyCart";

export const TableCart = () => {
	return (
		<table className="table table-bordered">
			<TableHeadCart/>
			<TableBodyCart/>
		</table>
	)
}