const orm = require('../config/orm')

const burger = {
    all: function (cb) {
        orm.selectAll("burgers", function(results) {
            cb(results)
        })
    },
    createOne: function (burgerName, isDevoured, cb) {
        orm.insertOne("burgers", "burger_name", "devoured", burgerName, isDevoured, function (results) {
            cb(results)
        })
    },
    update: function (columnToSearch, value, cb) {
        orm.updateOne("burgers", columnToSearch, value, function (results) {
            cb(results)
        })
    }
}

module.exports = burger;