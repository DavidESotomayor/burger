const express = require('express')
const burger = require('../models/burger')
const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll( function (data) {
        const hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
})

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
        res.json(result)
    })
})

router.put("/api/burgers/devoured/:id", function (req, res) {
    const condition = `id = ${req.params.id}`
    const boolean = req.body.devoured;


  console.log(condition);
//   console.log(typeof(condition));
//   console.log("req.body.devoured", boolean);

    burger.updateOne(boolean, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end()
        }

        res.status(202).end()
    })
})

module.exports = router;