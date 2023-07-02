export async function catalogByCategoriesId({categoryId, offset}) {
    const queryParams = new URLSearchParams({
        ...(categoryId && { categoryId }),
        offset
    })
    const response = await fetch(`${process.env.REACT_APP_URL_ITEMS}?${queryParams}`)
    if (!response.ok) throw Error('Не удалось загрузить каталог')
    return await response.json()
}
