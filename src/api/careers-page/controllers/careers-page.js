'use strict';

/**
 *  careers-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::careers-page.careers-page', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::careers-page.careers-page', {
            ...query,
            populate: {
                header: {
                    populate: '*'
                },
                hero: {
                    populate: '*'
                },
                WhoWeAre: {
                    populate: '*'
                },
                ourValue: {
                    populate: '*'
                },
                Benefits: {
                    populate: '*'
                },
                heading: {
                    populate: "*"
                },
                danaJohnson: {
                    populate: '*'
                },
                opennings: {
                    populate: '*'
                }
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
})
);
