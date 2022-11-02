const db = require("../models")

class CategoryService {
    async getCategory(categoryId) {
        return currentcategory = await db.Category.findByPk(categoryId, {
            attributes :["name"]
        })
    }
  }
  module.exports = new CategoryService();
  