import User from "../models/user.js"
import bcrypt from 'bcrypt'

export default {
    createUser: async function ({ userInput }, req) {
        const user = await User.findOne({ where: { email: userInput.email } })
        if (user) {
            throw new Error('user Already exist')
        }
       const hashpass = await bcrypt.hash(userInput.password,10)
        const newUser = await User.create({
            email: userInput.email,
            name: userInput.name,
            password: hashpass
        })
        console.log(newUser)
   }
}