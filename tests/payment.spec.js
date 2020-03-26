const PayFunctions = require('../core/payment')

describe('Do payments', () => {
    it('Should return pay with gatewayName', () => {
      expect(PayFunctions.payment('stripe', 'pay')).toBe('pay with stripe')
    })
    it('Should return partial reimburse with gatewayName ', () => {
      expect(PayFunctions.payment('stripe', 'partialReimburse')).toBe('Partial Reimburse with stripe')
    })
  })
  