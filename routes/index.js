
const adminRoutes = require('../routes/admin');

const mealController = require('../controllers/mealController');

module.exports.appRoute = router => {
    router.get('/', (req, res) => res.send("hello world"))
    router.get('/meals', mealController.getMenuController);
    router.use('/api/v1/admin', adminRoutes);
}