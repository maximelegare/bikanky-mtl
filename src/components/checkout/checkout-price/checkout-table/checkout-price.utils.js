export const calculCost = (price, shippingPrice) => {
    const beforeTax = price + shippingPrice
    console.log(beforeTax)
    const taxPrice =  (beforeTax*0.05 + beforeTax)*0.0975
    const bigTotal = beforeTax + taxPrice
    return {
        beforeTax:beforeTax.toFixed(2),
        taxPrice:taxPrice.toFixed(2),
        bigTotal:bigTotal.toFixed(2)
    }
}