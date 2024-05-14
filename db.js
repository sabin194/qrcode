// db.js
// const { Console, log } = require('console');


// const mongoose = require('mongoose');

// mongoose.connect("mongodb://0.0.0.0/sabin")



// .then(() => {
//   console.log("Database connected successfully");
// })
// .catch(() => {
//   console.log("Database cannot connected");
// });

// const LoginSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true
// },
// lastName: {
//     type: String,
//     required: true
// },
// age: {
//     type: Number,
//     required: true
// },
// sex: {
//     type: String,
//     enum: ['male', 'female'], // Assuming sex can only be 'male' or 'female'
//     required: true
// },
// username: {
//     type: String,
//     required: true,
//     unique: true // Ensures that each username is unique
// },
// contactNo: {
//     type: String,
//     required: true
// },
// password: {
//     type: String,
//     required: true
// }
// });

// const collection = new mongoose.model("users", LoginSchema);


// module.exports = collection;