export function formatPrice(price) {
    return new Intl.NumberFormat(
        'ru-RU',
        {currency: 'RUB'}
    ).format(price)
}