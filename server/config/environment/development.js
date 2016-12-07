'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGOLAB_URI || 'mongodb://localhost/newapp3-dev'
  },

  // Seed database on startup
  seedDB: {
    shared: true,
    env: true
  }

};
