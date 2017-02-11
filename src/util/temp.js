var fs = require('fs');

var data1="";

{
    fs.readFile('temp.txt', function (err, data) {
        if (err) return console.error(err);

        console.log(data.toString());
        data1 = data;
    });

}

console.log('Program Ended' +data1+"----------------------");