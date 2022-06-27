'use strict';

/**
 *  contact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact.contact', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::contact.contact', {
            ...query,
            populate: {
                header: {
                    populate: '*'
                },
                hero: {
                    populate: '*'
                },
                officeInfo: {
                    populate: '*'
                },
                faqs: {
                    populate: '*'
                },
                client_feedback: {
                    populate: '*'
                },
                trustedByCompanies: {
                    populate: "*"
                },
                DanaJohnsonFeedback: {
                    populate: '*'
                }
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
})
);
