import classNames from "classnames";
import {nanoid} from "nanoid";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedSize} from "../reducers/selectedSize/slice";
import {useEffect} from "react";

export const Sizes = ({sizes}) => {
    const selectedSize = useSelector(state => state.selectedSizeReducer.value)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setSelectedSize(''))
    }, [dispatch])

    const classnameSelectedSize = (isSelected) => classNames({
        'catalog-item-size': true,
        selected: isSelected
    })

    const onClick = (size) => {
        dispatch(setSelectedSize(size))
    }

    return (
        <p>Размеры в наличии:{' '}
            {sizes.map(o => (
                <span className={classnameSelectedSize(o.size === selectedSize)}
                      onClick={() => onClick(o.size)} key={nanoid()}>
					{o.size}
				</span>
            ))}
        </p>
    )
}