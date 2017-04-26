/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/cotizacions              ->  index
 * POST    /api/cotizacions              ->  create
 * GET     /api/cotizacions/:id          ->  show
 * PUT     /api/cotizacions/:id          ->  upsert
 * PATCH   /api/cotizacions/:id          ->  patch
 * DELETE  /api/cotizacions/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Cotizacion = require('./cotizacion.model');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Cotizacions
exports.index = function(req, res) {
  return Cotizacion.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Cotizacion from the DB
exports.show = function(req, res) {
  return Cotizacion.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Cotizacion in the DB
exports.create = function(req, res) {
  return Cotizacion.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Cotizacion in the DB at the specified ID
exports.upsert = function(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Cotizacion.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Cotizacion in the DB
exports.patch = function(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Cotizacion.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Cotizacion from the DB
exports.destroy = function(req, res) {
  return Cotizacion.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
