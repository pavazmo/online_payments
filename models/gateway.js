///////////////////////////////////////////////////
//  Schema of gateway
///////////////////////////////////////////////////

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gatewaySchema = new Schema({
    name: { type: String, index: { unique: true }},
    active: {type: Boolean},
    functions: {
        pay: { type: Boolean },
        reimburse: { type: Boolean },
        partialReimburse: {type: Boolean},
    },
    __v: { type: Number, select: false },

});

module.exports = mongoose.model('Gateway', gatewaySchema); 