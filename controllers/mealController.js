const mealModel = require('../models/meals');


module.exports.getMenuController = (req, res, next) => {
    const meals = mealModel.getMeals();

    res.json({ meals });
}