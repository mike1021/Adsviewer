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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.show = show;
exports.create = create;
exports.update = update;
exports.destroy = destroy;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _evento = require('./evento.model');

var _evento2 = _interopRequireDefault(_evento);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function saveUpdates(updates) {
  return function (entity) {
    var updated = _lodash2.default.merge(entity, updates);
    return updated.save().then(function (updated) {
      return updated;
    });
  };
}

function removeEntity(res) {
  return function (entity) {
    if (entity) {
      return entity.remove().then(function () {
        res.status(204).end();
      });
    }
  };
}

function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Eventos
function index(req, res) {
  return _evento2.default.find().exec().then(respondWithResult(res)).catch(handleError(res));
}

// Gets a single Evento from the DB
function show(req, res) {
  return _evento2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(respondWithResult(res)).catch(handleError(res));
}

// Creates a new Evento in the DB
function create(req, res) {
  return _evento2.default.create(req.body).then(respondWithResult(res, 201)).catch(handleError(res));
}

// Updates an existing Banner in the DB
function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return _evento2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(saveUpdates(req.body)).then(respondWithResult(res)).catch(handleError(res));
}

// Deletes a Evento from the DB
function destroy(req, res) {
  return _evento2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(removeEntity(res)).catch(handleError(res));
}
//# sourceMappingURL=evento.controller.js.map
