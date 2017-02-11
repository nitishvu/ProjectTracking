/**
 * Created by npavan on 07-02-2017.
 */
// Import events module
var events = require('events');
var listenerCount = require('listenercount')

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
    console.log('connection succesful.');

    // Fire the data_received event
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
console.log(listenerCount(eventEmitter,'data_received'));
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
    console.log('data received succesfully.');
});

// Fire the connection event
console.log(listenerCount(eventEmitter,'data_received'));
eventEmitter.emit('connection');
console.log(listenerCount(eventEmitter,'data_received'));
console.log('Program Ended.');