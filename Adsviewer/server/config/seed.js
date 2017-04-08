/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Banner from '../api/banner/banner.model';


  Banner.find({})
  .then(() => {
  Banner.create({
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
  })
  .then(() => {
   console.log('finished populate banners');
  });
});

User.find({})
  .then(() => {
    User.create({
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
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
