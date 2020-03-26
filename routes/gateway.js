'use strict'

const express = require('express');
const GatewayController = require('../controllers/gateway');
const app = express();

app.post('/', GatewayController.createGateway);
app.put('/:id', GatewayController.updateGateway);
app.post('/payment', GatewayController.doPayment);

module.exports = app;
