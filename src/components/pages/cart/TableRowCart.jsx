import {Link} from "react-router-dom";
import {formatPrice} from "../../../utils/formatPrice";
import {ButtonRemoveCart} from "../../ButtonRemoveCart";

export const TableRowCart = ({index, id, title, size, count, price}) => {
    return (
        <tr>
            <td scope="row">{index + 1}</td>
            <td><Link to={`/catalog/product/${id}`}>{title}</Link></td>
            <td>{size}</td>
            <td>{count}</td>
            <td>{`${formatPrice(price)} руб.`}</td>
            <td>{`${formatPrice(price * count)} руб.`}</td>
            <td><ButtonRemoveCart id={id}/></td>
        </tr>
    )
}