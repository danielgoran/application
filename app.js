let mongoose = require('mongoose');

let Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/users').then(() => {
    console.log('Connected to MongoDB...');
}).catch((error) => {
    console.log('Something is wrong...');
})

let userSchema = new Schema({
    login: String,
    password: {
        type: String,
        minlength: 4
    },
    age: {
        type: Number,
        min: 0
    },
    student: Boolean,
    country: String
});

let User = mongoose.model('User', userSchema);

// How to read a document

// async function getUsers() {
//     let users = await User
//                         .find()
//                         .where('age').gt(25).lt(35)
//                         .limit(3)
//                         .sort({age: 1});
//                         // .select({login: true, password: true});
//     console.log(users);
// }
// getUsers();

// How to update a document
async function updateUser() {

    // OPTION 1

    // let user = await User.findOne({login: 'Peter'});
    // user.password = '1234';
    // await user.save();
    // console.log('Done!');

    // OPTION 2
    User.findOneAndUpdate({login: 'Peter'}, {password: '1234'}, () => {
        console.log('Done!');
    })
}
// updateUser();

// How to delete a Document or a User
async function removeUser() {
    let result = await User.deleteOne({login: 'Peter'});
    console.log(result);
}
removeUser();

// How to delete many users
// async function removeUser() {
//     let result = await User.deleteMany({login: 'Peter'});
//     console.log(result);
// }
// removeUser();