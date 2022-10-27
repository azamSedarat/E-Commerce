const { createUserService } = require('../../services');

const register = async(req, res) => {
        const createUser = createUserService.createUser(req)
        if (!createUser) {
            return res.render("error", { errors: error.message })
        }
        return res.render("register", {req})
    }


module.exports = {
    register
}