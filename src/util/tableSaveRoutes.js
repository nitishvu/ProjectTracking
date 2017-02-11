/**
 * Created by npavan on 01-02-2017.
 */
var fs = require('fs');

//var dateFormat = require('dateformat');


console.log('\n *STARTING* \n');
;
// Get content from file
var x,y = '';
var fileName = '';

var writeCallback = function() {
    console.log('write call back is coplete');
};
var saveTableData = function(jsonContent,fileName) {
    var now = Date.now();
  // var newDate = dateFormat(now, "isoDateTime");

    var backupFileName = fileName + '_' + now + 'bkp';
    fs.rename(fileName, backupFileName, function(err) {
        if (err) console.log('ERROR: ' + err);
    });

    var jsonString = JSON.stringify(jsonContent);
    fs.writeFile(fileName, jsonString, null, 4);
    return 1;
};


// Get Value from JSON
//myObj = {'name':'John', 'age':30, 'car':null};
/*
 var jsonContent = getJsonContents("temp.json");
 for (x in jsonContent)
 {
 // console.log(jsonContent[x]);
 var tempContent = jsonContent[x];
 for (y in tempContent)
 {
 console.log(tempContent[y]);
 }
 }
 */
//console.log("User Name:", jsonContent.username);
//console.log("Email:", jsonContent.email);
//console.log("Password:", jsonContent.password);
console.log('\n *EXIT* \n');

/* for append

 fs.readFile('/etc/passwd', 'utf8', function readFileCallback(err, data){
 if (err){
 console.log(err);
 } else {
 obj = JSON.parse(data); //now it an object
 obj.table.push({id: 2, square:3}); //add some data
 json = JSON.stringify(obj); //convert it back to json
 fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back
 }});
 */

module.exports = saveTableData;/**
 * Created by npavan on 02-02-2017.
 */
