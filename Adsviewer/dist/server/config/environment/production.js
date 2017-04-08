'use strict';

// Production specific configuration
// =================================

module.exports = {
        // Server IP
        ip: process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined,

        // Server port
        port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080,

        // MongoDB connection options
        mongo: {
                uri: process.env.MONGODB_URI || process.env.MONGOHQ_URL || process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME || 'mongodb://vieweruser:Chris1513@ds011734.mlab.com:11734/viewerapp'
        }
};
//# sourceMappingURL=production.js.map
