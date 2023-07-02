import {useDispatch, useSelector} from "react-redux";
import {setAddress, setPhone, setSuccess} from "../reducers/order/slice";
import {useEffect, useState} from "react";
import {ButtonSubmitOrder} from "./ButtonSubmitOrder";

export const OrderForm = () => {
    const dispatch = useDispatch()
    const {owner: {phone, address}, loading, error, success} = useSelector(state => state.orderReducer.value)
    const [check, setCheck] = useState(false)

    useEffect(() => {
        dispatch(setSuccess(false))
    }, [dispatch])

    if (success) return (
        <div className='text-center'><span>Заказ оформлен успешно!</span></div>
    )

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

    const onInputPhone = (e) => {
        dispatch(setPhone(e.target.value))
    }
    const onInputAddress = (e) => {
        dispatch(setAddress(e.target.value))
    }
    const onClickCheck = () => {
        setCheck(!check)
    }
    return (
        <div className="card" style={{maxWidth: '30em', margin: '0 auto'}}>
            <form className="card-body">
                <div className="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <input className="form-control" onInput={onInputPhone} value={phone}
                           id="phone" placeholder="Ваш телефон"/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Адрес доставки</label>
                    <input className="form-control" onInput={onInputAddress} value={address}
                           id="address" placeholder="Адрес доставки"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" onClick={onClickCheck}
                           className="form-check-input" id="agreement"/>
                    <label className="form-check-label" htmlFor="agreement">
                        Согласен с правилами доставки
                    </label>
                </div>
                <ButtonSubmitOrder/>
            </form>
        </div>
    )
}