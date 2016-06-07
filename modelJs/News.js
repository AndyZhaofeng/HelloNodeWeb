/**
 * Created by zhaofeng on 16/6/7.
 */
var mongoose=require('/Users/zhaofeng/Library/nodeJsLibrary/node_modules/mongoose');
var NewsSchema=require('../schemas/NewsSchemas');
var News=mongoose.model('News',NewsSchema);

module.exports = News