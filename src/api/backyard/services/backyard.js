'use strict';

/**
 * backyard service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::backyard.backyard');
