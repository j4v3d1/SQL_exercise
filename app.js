var mysql = require('mysql2');
var { faker } = require('@faker-js/faker'); 

var connection = mysql.createConnection({
  host     : 'localhost',
  user: 'root',
  password: process.env.MYSQL_PW,  // your root user's password,
  database : 'join_us'
});
console.log('connection established')


// SELECTING DATA

// var q = 'SELECT * FROM users ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });


 //var q = 'SELECT Date_format(created_at, "%M %D %Y") as earliest_date FROM users order by created_at limit 1';
 //var q = 'SELECT email, created_at FROM users order by created_at limit 1'
//var q = 'SELECT Date_format(created_at, "%M") as month, count(*) as count FROM users group by month order by month desc'
//var q = 'SELECT count(*) as yahoo_users from users where email like "%@yahoo.com%"';
var q  = ''


//var q = 'SELECT DATE_FORMAT(MIN(created_at), "%M %D %Y") as earliest_date  FROM users';

//var q = 'SELECT * FROM   users  WHERE  created_at = (SELECT Min(created_at) FROM   users)';

connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});




// var q = 'SELECT count(*) as count FROM users ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// for(var i = 0; i < 500; i++){
//   console.log("HELLO WORLD!");
// }

// Execute file with:
// node filename.js

// SELECTING DATA
// var q = 'SELECT COUNT(*) AS total FROM users ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].total);
// });

// INSERTING DATA

// var q = 'INSERT INTO users (email) VALUES ("rusty_the_dog@gmail.com")';

// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// INSERTING DATA TAKE 2
// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };

// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
//  });
 
// connection.end();

// Mon Apr 24 2017 17:10:07 GMT+0000 (UTC)
// "yyyy-mm-dd hh:mm:ss"
// console.log(faker.date.past());


// INSERTING LOTS OF DATA!!!!=============================

// var data = [];
// for(var i = 0; i < 500; i++){
//     data.push([
//         faker.internet.email(),
//         faker.date.past()
//     ]);
// }
// console.log(data);

// var q = 'INSERT INTO users (email, created_at) VALUES ?';

// connection.query(q, [data], function(err, result) {
//   console.log(err);
//   console.log(result);
// });

// connection.end();


// Find Faker Docs Here: https://github.com/marak/Faker.js/

// Install Faker via command line:
// npm install faker

// Require it inside of a JS file:
// var faker = require('faker');

// // USE IT!
// // Print a random email
// console.log(faker.internet.email());

// // Print a random past date
// console.log(faker.date.past());
// console.log(faker.date.past().toString());
// // Print a random past date
// console.log(faker.address.city());

// // We can define a new function
// function generateAddress(){
//   console.log(faker.address.streetAddress());
//   console.log(faker.address.city());
//   console.log(faker.address.state());
// }

// // And then execute that function:
// generateAddress();


// var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
// console.log(results[0].time);
// console.log(results[0].date.toString());
// console.log(results[0].now.toString());
// });
// connection.end();
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution)
// });
connection.end();