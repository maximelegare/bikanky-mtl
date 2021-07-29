export const calculCost = (price, shippingPrice) => {
    const beforeTax = price 
    const tpsTax =  beforeTax*0.05
    const tvqTax = (tpsTax + beforeTax)*0.0975
    const beforeShipping = beforeTax + tpsTax + tvqTax
    const bigTotal = beforeTax + tpsTax + tvqTax + shippingPrice
    return {
        beforeTax:beforeTax.toFixed(2),
        tvqTax:tvqTax.toFixed(2),
        tpsTax:tpsTax.toFixed(2),
        beforeShipping:beforeShipping.toFixed(2),
        bigTotal:bigTotal.toFixed(2)
    }
}