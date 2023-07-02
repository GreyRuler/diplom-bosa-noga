import { Fragment } from 'react';
import {CatalogWidget} from "../CatalogWidget";
import {Search} from "../Search";

export const Catalog = () => {
	return (
		<Fragment>
			<CatalogWidget>
				<Search/>
			</CatalogWidget>
		</Fragment>
	)
}
