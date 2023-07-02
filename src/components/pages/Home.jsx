import { Fragment } from 'react';
import {CatalogWidget} from "../CatalogWidget";

export const Home = () => {
	return (
		<Fragment>
			<section className="top-sales">
				<h2 className="text-center">Хиты продаж!</h2>
				<div className="preloader">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</section>
			<CatalogWidget/>
		</Fragment>
	)
}
