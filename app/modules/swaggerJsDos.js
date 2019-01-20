'use strict';

const PORT = 7001;

const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info: {
    // API informations (required)
    title: '会员服务', // Title (required)
    version: '1.0.0', // Version (required)
    description: '测试接口', // Description (optional)
  },
  host: `192.168.16.105:${PORT}`, // Host (optional)
  basePath: '/', // Base path (optional)
};

// Options for the swagger docs
const options = {
  // Import swaggerDefinitions
  swaggerDefinition,
  // Path to the API docs
  // Note that this path is relative to the current directory from which the Node.js is ran, not the application itself.
  apis: [ 'app/router.js', 'app/modules/parameters.yaml' ],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
module.exports = swaggerJSDoc(options);
