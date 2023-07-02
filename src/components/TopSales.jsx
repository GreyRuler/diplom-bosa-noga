import useJsonFetch from "../hooks/useJsonFetch";
import {CatalogItem} from "./CatalogItem";

export const TopSales = () => {
    const {data: topSales, error, isLoading} = useJsonFetch(
        process.env.REACT_APP_URL_TOP_SALES,
        {method: 'GET'}
    )

    if (isLoading) return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="preloader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    )

    if (!topSales.length) return

    if (error) return (
        <span>Не удалось загрузить "Хиты продаж"</span>
    )

    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="row">
                {topSales.map(o => <CatalogItem item={o} key={o.id}/>)}
            </div>
        </section>
    )
}