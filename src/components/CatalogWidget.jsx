import useJsonFetch from "../hooks/useJsonFetch";
import {Categories} from "./Categories";
import {Route, Routes} from "react-router-dom";
import {CatalogList} from "./CatalogList";
import {ButtonDownloadMore} from "./ButtonDownloadMore";
import {useSelector} from "react-redux";

export const CatalogWidget = () => {
	const {data: categories, isError, isLoading} = useJsonFetch(
		process.env.REACT_APP_URL_CATEGORIES,
		{method: 'GET'}
	)
	const {hasMoreData} = useSelector(state => state.catalogReducer.value)
	return (
		<section className="catalog">
			<h2 className="text-center">Каталог</h2>
			<Categories categories={categories}/>
			<Routes>
				<Route path={`items/`} element={<CatalogList/>}/>
				{categories.map(o => (
					<Route path={`items/${o.id}`} key={o.id}
						   element={<CatalogList/>}/>
				))}
			</Routes>
			{hasMoreData && <ButtonDownloadMore/>}
		</section>
	)
}