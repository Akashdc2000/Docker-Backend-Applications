const express = require('express')
const router = new express.Router();


router.get('/', (request, response) => {
    response.send("<h1>Welcome This is Router 2</h1>")
})


module.exports = router;
