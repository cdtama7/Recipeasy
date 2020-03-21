const db = require("../models");

module.exports = {
  findAllForUser: function(req, res) {
    db.Favs
      .find({userId: req.params.userId})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findForUserByRecipeId: function(req, res) {
    db.Favs
      .find({recipeId: req.params.recipeId, userId: req.params.userId})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  deleteForUserByRecipeId: function(req, res) {
    db.Favs
      .deleteOne({recipeId: req.params.recipeId, userId: req.params.userId})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  findById: function(req, res) {
    db.Favs
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Favs
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Favs
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Favs
      .deleteOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
