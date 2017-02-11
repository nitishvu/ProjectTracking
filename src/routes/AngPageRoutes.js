/**
 * Created by npavan on 09-02-2017.
 */

var express = require('express');
var AngPageRoutes = express.Router();

AngPageRoutes.route('/').get (function(req,res) {
    res.render('ang');
    //res.send('hello Angular');
});

AngPageRoutes.route('/sa').get (function(req,res) {
    res.render('ang');
    //res.send('hello Angular');
});
module.exports = AngPageRoutes;