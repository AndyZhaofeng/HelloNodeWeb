/**
 * Created by zhaofeng on 16/6/7.
 */
var express=require('/Users/zhaofeng/Library/nodeJsLibrary/node_modules/express');
var path=require('/Users/zhaofeng/Library/nodeJsLibrary/node_modules/path');
var mongoose=require('/Users/zhaofeng/Library/nodeJsLibrary/node_modules/mongoose');
var bodyParser=require('/Users/zhaofeng/Library/nodeJsLibrary/node_modules/body-parser');
var News=require('./modelJs/News.js');
var port=process.env.PORT || 3001;
var app=express();

mongoose.connect('mongodb://localhost/news');
app.set('views','./views/pages');
app.set('view engine','jade');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'bower_components')));
app.listen(port);

console.log('HelloNodeWeb started on port '+port);

//index page
app.get('/',function(req,res){

    News.fetch(function(err,news){
        if(err){
            console.log(err);
        }
        res.render('index',{
            title:'',
            news:news
        })
    });
});

app.get('/second',function(req,res){
    res.render('second',{
        title:'second page'
    })
});

app.get('/admin/commit',function(req,res){
    res.render('admin',{
        title:'后台录入页',
        news:{
            title:''
        }
    })
});