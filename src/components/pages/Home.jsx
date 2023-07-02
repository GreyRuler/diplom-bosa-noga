import { Fragment } from 'react';
import {CatalogWidget} from "../CatalogWidget";
import {TopSales} from "../TopSales";

export const Home = () => {
	return (
		<Fragment>
			<TopSales/>
			<CatalogWidget/>
		</Fragment>
	)
}
