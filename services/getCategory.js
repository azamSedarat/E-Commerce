const db = require("../../models");

const getCategory = async (categoryId)=> {
    try {
        const currentcategory = await db.Category.findByPk(categoryId, {
            attributes :["name"]
        })
        return currentcategory
    } catch (error) {
        throw error
    }
}

module.exports = {
    getCategory
}