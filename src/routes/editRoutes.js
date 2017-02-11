/**
 * Created by npavan on 31-01-2017.
 */
var express = require('express');
var editRoutes = express.Router();

editRoutes.route('/')
    .get(function (req,res) {
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
        res.render('edit',{title :'hello world  from edit page render',list1:['a','b'],nav:textJson});
    });

editRoutes.route('/Contact')
    .get(function (req,res) {
        res.send('Edit page contact');
    });

module.exports = editRoutes;