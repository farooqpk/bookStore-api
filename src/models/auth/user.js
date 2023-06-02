
import mongoose from "mongoose";



const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'username is required'],
        unique: [true, 'username already exist'],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minLength: [5, 'password minlength should be greater than or equal to 5']
    },
})


// using mongoose middleware to hash pass before saving to db
userSchema.pre('save',async function(next){
this.password = await bcrypt.hash(this.password,10)
next()
})


export const User = mongoose.model("User",userSchema)