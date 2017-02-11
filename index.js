
/**
 * Created by npavan on 30-01-2017.
 */
var express = require('express');
//var bodyParser     =        require("body-parser");
var app = express();

var port = process.env.PORT || 80;
var editRouter = require('./src/routes/editRoutes');
var AngPageRoute = require('./src/routes/AngPageRoutes');
var jsonFile = ('./JsonData/temp.json');



//console.log(tableHtmlData);
app.use(express.static('public'));
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.set('views' ,'./src/views');

app.set('view engine','ejs');
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');

app.use('/edit',editRouter);
app.use('/ang',AngPageRoute);

//
app.get('/',function (req , res) {
        var tableData = require('./src/util/ReadJsonData')(jsonFile);
        var tableHtmlData = require('./src/util/table_gen')(tableData);
        var textJson = [{
            Link:'/',
            Text:'Home'
        },
            {
            Link:'/edit',
            Text:'edit'
        },{
            Link: '/contact',
            Text: 'contact'
        }];
        res.render('index',{title :'hello world  arhak from home page render',list1:['a','b'],nav:textJson,tableHtmlData:tableHtmlData});

    });
//http://localhost/api/users?id=4&token=sdfa3&geo=us

app.get('/api/users', function(req, res) {
    var tableData = require('./src/util/ReadJsonData')(jsonFile);
    var userId = req.param('id');
    var token = req.param('token');
    // var geo = req.param('geo');
    var geo = req.query.geo;
    console.log('getting table data asdfasd');
    //   res.send(userId + ' ' + token + ' ' + geo);
    res.send(tableData);
});


app.post('/api/users', function(req, res) {

    res.send("this post call for api/users");
});

app.all('/test', function(req, res) {

    res.send("this all call for route test");
});

app.get('/api/saveData', function(req, res) {
    var saveData = require('./src/util/tableSaveRoutes')(req.query,jsonFile);


    //   res.send(userId + ' ' + token + ' ' + geo);
    // res.send(tableData);
    console.log(req.query);

    res.send('sucess');
});
app.listen(port,function (err) {
    console.log('running server on port ' + port);
});

