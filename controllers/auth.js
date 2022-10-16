const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../../models")


const login = async(req, res) => {
    try {
        const user = await db.User.findOne({
            where: {
                username: req.body.username
            }
        })
        if(!user){
            return res.status(404).send({
                status: "error",
                message: "hamchin useri nadarim",
                data: null
            })
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if(validPassword){
            const token = jwt.sign({ username: user.username }, process.env.SECRET_KEY, { expiresIn: 60 * 60 }, { algorithm: 'HS256' });
            return res.status(200).send({
                status: "success",
                message: "user login shod",
                data: {
                    token
                }
            })
        }else{
            return res.status(403).send({
                status: "error",
                message: "pasword ghalate",
                data: null
            })
        }
        
    } catch (error) {
        return res.status(400).send({
            status: "error",
            message: error.message,
            data: null
        })
    }
}


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
    login,
    register,
}