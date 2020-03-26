'use strict'

const Gateway = require('../models/gateway');
const resp = require('../config/res');
const paymentCore = require('../core/payment');

function createGateway(req, res){
  const body = req.body;
  const gateway = new Gateway({
    name: body.name,
    active: body.active,
    functions: body.functions
  })

  gateway.save((err, savedGateway) => {
    if (err) {
      return resp.error500( err, res );
    }

    resp.OK201(savedGateway, res);
   });
}

function updateGateway(req, res){
  //to do update
}

function doPayment(req, res) {
  const name = req.body.name;
  const action = req.body.action;
  payment(name, action).then(result => resp.OK200(result, res))
}

function payment(name, action) {
  return new Promise(function (resolve, reject) {
    const result = paymentCore.payment(name,action);
    resolve(result);
  })
}

exports.doPayment = doPayment; 
exports.createGateway = createGateway;
exports.updateGateway = updateGateway;
