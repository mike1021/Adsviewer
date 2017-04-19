/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/eventos              ->  index
 * POST    /api/eventos              ->  create
 * GET     /api/eventos/:id          ->  show
 * PUT     /api/eventos/:id          ->  upsert
 * PATCH   /api/eventos/:id          ->  patch
 * DELETE  /api/eventos/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Evento from './evento.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
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

// Gets a list of Eventos
export function index(req, res) {
  return Evento.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Evento from the DB
export function show(req, res) {
  return Evento.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Evento in the DB
export function create(req, res) {
  return Evento.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Banner in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Evento.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Evento from the DB
export function destroy(req, res) {
  return Evento.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
