'use strict'
const Factory = require('../utils/variables').Factory;
const actionsType = require('../utils/variables').actionsType;

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
    const gatewayFactory = require(Factory[gatewayName])
    const result = gatewayFactory.partialReimburse(gatewayName);
    return result;
}

exports.payment = payment;