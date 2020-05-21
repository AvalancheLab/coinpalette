const server = require('express')();

// General server logger.
export default function Logger (req, res, next) {
    console.log(Date.now())
}