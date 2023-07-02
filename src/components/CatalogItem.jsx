import {Link} from "react-router-dom";
import {formatPrice} from "../utils/formatPrice";

export const CatalogItem = ({item}) => {
    const price = formatPrice(item.price)

    return (
        <div className="col-4">
            <div className="card catalog-item-card">
                <div className='card-header-img'>
                    <img src={item.images[0]}
                         className="card-img-top img-fluid" alt={item.title}/>
                </div>
                <div className="card-body">
                    <p className="card-text">{item.title}</p>
                    <p className="card-text">{price} руб.</p>
                    <Link to={`/catalog/product/${item.id}`} className="btn btn-outline-primary">Заказать</Link>
                </div>
            </div>
        </div>
    )
}