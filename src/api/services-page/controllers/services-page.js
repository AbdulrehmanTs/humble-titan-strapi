'use strict';

/**
 *  services-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::services-page.services-page', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::services-page.services-page', {
            ...query,
            populate: {
                header: {
                    populate: '*'
                },
                top_section: {
                    populate: '*'
                },
                cotactUs: {
                    populate: '*'
                },
                bayo_quote: {
                    populate: '*'
                },
                ourValue: {
                    populate: '*'
                },
                IndustriesWeServe: {
                    populate: "*"
                },
                ht_digital_services: {
                    populate: '*'
                },
                services_cards: {
                    populate: {
                        serviceCards: {
                            populate: '*'
                        }
                    }
                },
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));
