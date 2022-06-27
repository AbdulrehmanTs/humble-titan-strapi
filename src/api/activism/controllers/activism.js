'use strict';

/**
 *  activism controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::activism.activism', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::activism.activism', {
            ...query,
            populate: {
                header: {
                    populate: '*'
                },
                hero: {
                    populate: '*'
                },
                DiscoverWorldIssues: {
                    populate: {
                        features: {
                            populate: {
                                feature: {
                                    populate: {
                                        image: true
                                    }
                                }
                            }
                        }
                    }
                },
                Discoverwhyandwhere: {
                    populate: {
                        offerings: {
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
