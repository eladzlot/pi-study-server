var fixtures = require('pow-mongodb-fixtures').connect('test');
var test = require('blue-tape');
var routes = require('./router');
var id = require('pow-mongodb-fixtures').createObjectId;

// fixtures.clearAllAndLoad({
//     users: [
//         { name: 'Maeby' },
//         { name: 'George Michael' },
//         {name:'sup'}
//     ]
// }, (a) => {
// 	console.log(a);
// });

// test('getStudy', t => {
// 	t.

// });