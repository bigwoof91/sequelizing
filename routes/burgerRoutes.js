var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
        db.burgers.findAll({}).then(function(dbburger) {
            var hbsObject = {
                burger: dbburger
            };
            res.render("index", hbsObject);
        });
    });

    app.post("/", function(req, res) {
        db.burgers.create({
            burgerName: req.body.burgerName,
            devoured: 0
        }).then(function(dbburger) {
            res.redirect("/");
        });
    });

    app.put("/:id", function(req, res) {
        db.burgers.update({
            devoured: req.body.devoured
        }, {
            where: { id: req.params.id }
        }).then(function(dbburger) {
            res.redirect("/");
        });
    });

    app.delete("/:id", function(req, res) {
        db.burgers.destroy({
            where: { id: req.params.id }
        }).then(function(dbburger) {
            res.redirect("/");
        });
    });
};