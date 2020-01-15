const router = require('express').Router();


router.get('/', (req, res) => {
    console.log('admin route');
    res.json({
        admin: 'hello'
    })
})

module.exports = router;