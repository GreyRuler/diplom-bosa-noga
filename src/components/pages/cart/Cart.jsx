import {TableCart} from "./TableCart";
import {Order} from "../../Order";

export const Cart = () => {
    return (
        <section className="cart">
            <h2 className="text-center">Корзина</h2>
            <TableCart/>
            <Order/>
        </section>
    )
}