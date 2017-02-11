/**
 * Created by npavan on 01-02-2017.
 */
var fs = require('fs');
console.log('\n *STARTING* \n');
// Get content from file
var x,y = '';
var fileName='';
var getJsonContents = function(jsonFile) {

    var contents = fs.readFileSync(jsonFile);
    // Define to JSON type
    var jsonContent = JSON.parse(contents);
    return jsonContent;
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

module.exports = getJsonContents;