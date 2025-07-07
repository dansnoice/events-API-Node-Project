const User = require("./userModel");

//createUser
//everything you pass into a function becomes the parameter of that function
//the parameter holds the place of the argument you call the function with
//ALWAYS TRUE!!! for ALL FUNCTIONS!!!
const createUser = async (userData) => {
    try {
        //Add new user to database!
        const newUser = await User.create(userData);
            return newUser
        
    } catch (error) {
        throw error
    }
        
}

const getUsers = async () =>{
    try {
        const users = await User.find()
        return users
    } catch (error) {
        throw error        
    }
}

const getUserById = async (id) =>{
    try {
        const user = await User.findById(id)
        return user
    } catch (error) {
        throw error        
    }
}
module.exports = {
    createUser, getUsers, getUserById
}