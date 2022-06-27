'use strict';

/**
 *  faqs-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::faqs-page.faqs-page', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::faqs-page.faqs-page', {
            ...query,
            populate: {
                header: {
                    populate: '*'
                },
                hero: {
                    populate: '*'
                },
                faqs: {
                    populate: '*'
                },
                requestAQuote_section: {
                    populate: '*'
                }
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));
