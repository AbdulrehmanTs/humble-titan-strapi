'use strict';

/**
 * humble-mind service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::humble-mind.humble-mind');
