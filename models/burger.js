const orm = require('../config/orm')

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (results) {
            cb(results)
        })
    },
    insertOne: function (isDevoured, cb) {
        orm.insertOne("burgers", "burger_name", isDevoured, function (results) {
            cb(results)
        })
    },
    updateOne: function (devouredBoolean, value, cb) {
        console.log({value});
        orm.updateOne("burgers", "devoured", devouredBoolean, value, function (results) {
            cb(results)
        })
    }
}

module.exports = burger;