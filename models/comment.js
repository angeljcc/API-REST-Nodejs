/**
 * Created by angel on 30/03/15.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var comment = new Schema({
    text:       {type: String},
    id:         {type: Number}
});

module.exports = mongoose.model('comentarios',comment);

