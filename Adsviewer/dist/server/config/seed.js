/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var _user = require('../api/user/user.model');

var _user2 = _interopRequireDefault(_user);

var _banner = require('../api/banner/banner.model');

var _banner2 = _interopRequireDefault(_banner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_banner2.default.find({}).then(function () {
  _banner2.default.create({
    name: 'Nestle',
    texttoprincipal: 'Cupon 2016',
    textosecundario: 'Prueba 1',
    imagen1: 'http://yocove.com/appvizinno/Angular-master/tickets/images/dolcegusto/dolce_splash.jpg',
    imagen2: 'http://yocove.com/appvizinno/Angular-master/tickets/images/dolcegusto/b1.jpg',
    imagen3: 'http://yocove.com/appvizinno/Angular-master/tickets/images/dolcegusto/b2.jpg',
    imagen4: 'http://yocove.com/appvizinno/Angular-master/tickets/images/dolcegusto/b3.jpg',
    imagen5: 'http://yocove.com/appvizinno/Angular-master/tickets/images/dolcegusto/b4.jpg',
    clase: 'comida',
    divname: 'dolcegusto',
    linkpromo: 'http://yocove.com/appvizinno/Angular-master/tickets/images/dolcegusto/b1.jpg',
    active: true
  }).then(function () {
    console.log('finished populate banners');
  });
});

_user2.default.find({}).then(function () {
  _user2.default.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@example.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@example.com',
    password: 'admin'
  }).then(function () {
    console.log('finished populating users');
  });
});
//# sourceMappingURL=seed.js.map
