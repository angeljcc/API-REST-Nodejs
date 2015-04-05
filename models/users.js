/**
 * Created by angel on 30/03/15.
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    name:       {type: String},
    edad:       {type: Number},
    //comentario: {type: String, ref: "comentario"},
    id:         {type: Number}
});

module.exports = mongoose.model('Usuario',UsuarioSchema);

