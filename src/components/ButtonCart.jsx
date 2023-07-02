import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const ButtonCart = () => {
    const count = useSelector(state => state.cartReducer.value.length)
    return (
        <Link to='/cart' className="header-controls-pic header-controls-cart">
            {!!count && <div className="header-controls-cart-full">{count}</div>}
            <div className="header-controls-cart-menu"></div>
        </Link>
    )
}
