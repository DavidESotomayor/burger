const express = require('express')
const burger = require('../models/burger')
const router = express.Router();

router.get("/", function(req, res) {
    burger.all( function (data) {
        const hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
})

router.post("/", function (req, res) {
    burger.createOne("burger_name", req.body.name, function() {
        res.redirect("/")
    })
})

router.put("/:id", function (req, res) {
    const condition = `id = ${req.params.id}`

    burger.update({
        devoured: true
    }), { id: req.params.id}, function () {
        res.redirect("/")
    }
})

module.exports = router;