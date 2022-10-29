export const formatPrice = (price) => {
    return Intl.NumberFormat('it-IT', { style : 'currency', currency:'VND'}).format(price)
}