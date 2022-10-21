const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../../models")


const register = async(req, res) => {
    try {
        const user = await db.User.findOne({
            where: {
                username: req.body.username
            }
        })
        if(user){
            return res.status(400).send({
                status: "error",
                message: "hamchin useri darim",
                data: null
            })
        }
        const {username, password} = req.body
        const userObj = db.User.build({username, password})
        const salt = await bcrypt.genSalt(10);
        userObj.password = await bcrypt.hash(password, salt);
        await userObj.save();

        return res.status(201).send({
            status: "success",
            message: "user generate shod",
            data: {
                username: userObj.username
            }
        })

    } catch (error) {
        return res.status(400).send({
            status: "error",
            message: error.message,
            data: null
        })
    }

}


module.exports = {

    register
}
