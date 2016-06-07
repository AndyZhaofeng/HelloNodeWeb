/**
 * Created by zhaofeng on 16/6/7.
 */
var mongoose = require('mongoose');

var NewsSchema=new mongoose.Schema({
    title:String,
    releaseDate:String,
    url:String,
    comment:Number,
    insertDate:String,
    source:String
});

NewsSchema.pre('save',function(next){
    if(this.isNew){
        this.insertDate=Date.now();
    }
    next();
});

NewsSchema.statics={
    fetch: function(cb){
        return this
            .find({})
            .sort('insertDate')
            .exec(cb)
    },
    findById:function(id,cb){
        return this
            .findOne({_id: id})
            .exec(cb)
    }
}
module.exports=NewsSchema