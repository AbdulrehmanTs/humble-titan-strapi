'use strict';

/**
 *  humble-mind controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::humble-mind.humble-mind', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::humble-mind.humble-mind', {
            ...query,
            populate: {
                header: {
                    populate: '*'
                },
                hero: {
                    populate: '*'
                },
                ht_digital_services: {
                    populate: '*'
                },
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));
