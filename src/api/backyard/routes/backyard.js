'use strict';

/**
 * backyard router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::backyard.backyard');
