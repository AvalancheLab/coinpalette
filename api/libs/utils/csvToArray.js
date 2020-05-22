module.exports = function csvToArray (string) {
    return string ? string.split(',') : []
}