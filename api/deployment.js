const express = require('express')
const router = express.Router()

router.post('/deploy', ( _, res ) => {
    res.status(200).send('Received webhook.');
})

module.exports = router;