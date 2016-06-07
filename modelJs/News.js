/**
 * Created by zhaofeng on 16/6/7.
 */
var mongoose=require('mongoose');
var NewsSchema=require('../schemas/NewsSchemas.js');
var News=mongoose.model('News',NewsSchema);

module.exports = News