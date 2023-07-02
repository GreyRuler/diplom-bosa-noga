import useJsonFetch from "../hooks/useJsonFetch";
import {useParams} from "react-router-dom";
import {Sizes} from "./Sizes";
import {Count} from "./Count";
import {ButtonAddCart} from "./ButtonAddCart";

export const Product = () => {
    const {id} = useParams()
    const {data: product, error, isLoading} = useJsonFetch(
        `${process.env.REACT_APP_URL_ITEMS}/${id}`,
        {method: 'GET'}
    )
    const {
        images,
        title,
        manufacturer,
        sku,
        color,
        material,
        season,
        reason,
        sizes,
    } = product
    const filteredSizes = sizes?.filter(o => o.available)

    if (isLoading) return (
        <div className="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )

    if (error) return (
        <span>{error}</span>
    )

    return (
        <section className="catalog-item">
            <h2 className="text-center">{title}</h2>
            <div className="row">
                <div className="col-5">
                    <img src={images[0]}
                         className="img-fluid" alt={title}/>
                </div>
                <div className="col-7">
                    <table className="table table-bordered">
                        <tbody>
                        <tr>
                            <td>Артикул</td>
                            <td>{sku}</td>
                        </tr>
                        <tr>
                            <td>Производитель</td>
                            <td>{manufacturer}</td>
                        </tr>
                        <tr>
                            <td>Цвет</td>
                            <td>{color}</td>
                        </tr>
                        <tr>
                            <td>Материалы</td>
                            <td>{material}</td>
                        </tr>
                        <tr>
                            <td>Сезон</td>
                            <td>{season}</td>
                        </tr>
                        <tr>
                            <td>Повод</td>
                            <td>{reason}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="text-center">
                        <Sizes sizes={filteredSizes}/>
                        <Count/>
                    </div>
                    <ButtonAddCart {...product}/>
                </div>
            </div>
        </section>
    )
}