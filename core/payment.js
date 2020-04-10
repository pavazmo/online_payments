const actionsType = require('../utils/variables').actionsType;
const gateways = {
  paypal: require('./factory/stripe'),
  stripe: require('./factory/paypal'),
}
function isActive(gatewayName, action){
    //to do
    return true;
}

function payment(gatewayName, action){
  if (!action || !gatewayName){
      return;
  }
  
  if (!isActive (gatewayName ,action));
  switch(action){
    case actionsType.pay:
      return pay(gatewayName);
    case actionsType.reimburse:
      return reimburse(gatewayName);
    case actionsType.partialReimburse:
      return partialReimburse(gatewayName);
  }
}

function pay(gatewayName){
  return 'pay with ' + gatewayName;
}

function reimburse(gatewayName){
  return 'reimburse with ' + gatewayName;
}

function partialReimburse(gatewayName){
    const gatewayFactory = gateways.gatewayName;
    const result = gatewayFactory.partialReimburse(gatewayName);
    return result;
}

exports.payment = payment;