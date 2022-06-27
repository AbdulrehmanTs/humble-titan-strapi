'use strict';

/**
 *  the-team controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::the-team.the-team', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::the-team.the-team', {
            ...query,
            populate: {
                header: {
                    populate: '*'
                },
                hero: {
                    populate: '*'
                },
                bayo_mba: {
                    populate: '*'
                },
                rilwan: {
                    populate: '*'
                },
                hafiz: {
                    populate: '*'
                },
                trustedBy: {
                    populate: "*"
                },
                exceptional_resources: {
                    populate: '*'
                },
                great_benifits: {
                    populate: {
                        benefits: {
                            populate: '*'
                        }
                    }
                },
                tellUs_section: {
                    populate: '*'
                },
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));
