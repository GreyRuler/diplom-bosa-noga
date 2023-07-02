export async function catalogByCategoriesId({categoryId, offset, q}) {
    const queryParams = new URLSearchParams({
        ...(categoryId && { categoryId }),
        ...(q && { q }),
        offset
    })
    const response = await fetch(`${process.env.REACT_APP_URL_ITEMS}?${queryParams}`)
    if (!response.ok) throw Error('Не удалось загрузить каталог')
    return await response.json()
}
export async function order(data) {
    const response = await fetch(
        process.env.REACT_APP_URL_ORDER,
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data),
        }
    )
    if (!response.ok) throw Error('Не удалось оформить заказ')
}
