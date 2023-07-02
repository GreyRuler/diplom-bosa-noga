import {NavLink} from "react-router-dom";
import {classnamesMenuItem} from "../utils/classnames";

export const Categories = ({categories}) => {
    return (
        <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
                <NavLink to={`items/`}
                         className={classnamesMenuItem}>
                    Все
                </NavLink>
            </li>
            {categories.map(o => (

                <li className="nav-item" key={o.id}>
                    <NavLink to={`items/${o.id}`}
                             className={classnamesMenuItem}>
                        {o.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}