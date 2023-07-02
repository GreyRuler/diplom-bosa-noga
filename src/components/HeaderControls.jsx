import {ButtonCart} from "./ButtonCart";
import {SearchForm} from "./SearchForm";
import {SearchHeader} from "./SearchHeader";

export const HeaderControls = () => {
	return (
		<div>
			<div className="header-controls-pics">
				<SearchHeader/>
				<ButtonCart/>
			</div>
			<SearchForm/>
		</div>
	)
}