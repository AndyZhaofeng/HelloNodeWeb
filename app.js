/**
 * Created by zhaofeng on 16/6/7.
 */
var express=require('/Users/zhaofeng/Library/nodeJsLibrary/node_modules/express');
var port=process.env.PORT || 3001;
var app=express();

app.set('views','./views/pages');
app.set('view engine','jade');
app.listen(port);
console.log('HelloNodeWeb started on port '+port);

//index page
app.get('/',function(req,res){
    res.render('index',{
        title:'helloweb firstpage'
    })
})

app.get('/second',function(req,res){
    res.render('second',{
        title:'second page'
    })
})