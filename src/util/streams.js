/**
 * Created by npavan on 07-02-2017.
 */
var fs = require('fs');
var zlib = require('zlib');
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('temp1.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('temp1.txt.gz'));
var writeStream = fs.createWriteStream('temp2.txt');

//readerStream.pipe(writeStream);
// Set the encoding to be utf8.
//readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end',function() {
        console.log(data);
    /*
      writeStream.write(data,'UTF8');
      writeStream.end();
      console.log("data="+data);

      writeStream.on('finish', function() {
          console.log("Write completed.");
      });
      */
});

readerStream.on('error', function(err) {
    console.log(err.stack);
});

writeStream.on('finish', function() {
    console.log('Write completed.');
});

readerStream.on('finish', function(finish) {
    console.log('Data Streaming is finished');
    fs.createReadStream('temp1.txt.gz')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('temp2.txt'));

    readerStream.on('error', function(err) {
        console.log(err.stack);
    });

    writeStream.on('finish', function() {
        console.log('Write completed.');
    });

    readerStream.on('finish', function(finish) {
        console.log('Data Streaming is finished');
    });
    writeStream.on('end',function() {
        console.log(data);
    });
});




console.log('Program Ended');
