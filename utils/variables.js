const Factory = {
    stripe: './factory/stripe',
    paypal: './factory/paypal'
};

const actionsType = {
    pay: 'pay',
    reimburse: 'reimburse',
    partialReimburse: 'partialReimburse'
};

module.exports = {
    Factory,
    actionsType
}