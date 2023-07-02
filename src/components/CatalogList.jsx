import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {catalogChangeId} from "../reducers/catalog/slice";
import {CatalogItem} from "./CatalogItem";

export const CatalogList = () => {
	const {categoryId} = useParams()
	const dispatch = useDispatch()
	const {catalog, loading, error} = useSelector(state => state.catalogReducer.value)

	useEffect(() => {
		dispatch(catalogChangeId(categoryId))
	}, [dispatch, categoryId])

	if (loading) return (
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
	console.log(catalog)
	return (
		<div className="row">{
			catalog.map(o => <CatalogItem item={o} key={o.id}/>)
		}</div>
	)
}