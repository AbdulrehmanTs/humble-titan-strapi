'use strict';

/**
 *  industries-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::industries-page.industries-page', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::industries-page.industries-page', {
            ...query,
            populate: {
                header: {
                    populate: '*'
                },
                hero: {
                    populate: '*'
                },
                types_of_business: {
                    populate: {
                        features: {
                            populate: {
                                feature: {
                                    populate: "*"
                                }
                            }
                        }
                    }
                },
                what_ht_can_do: {
                    populate: {
                        Offerings: {
                            populate: '*'
                        }
                    }
                }
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));
