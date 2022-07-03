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
                    populate: {
                        actionButton: {
                            populate: '*'
                        },
                        abilities: {
                            populate: '*'
                        },
                        my_quote: {
                            populate: '*'
                        },
                        image: true
                    }
                },
                rilwan: {
                    populate: {
                        actionButton: {
                            populate: '*'
                        },
                        abilities: {
                            populate: '*'
                        },
                        my_quote: {
                            populate: '*'
                        },
                        image: true
                    }
                },
                hafiz: {
                    populate: {
                        actionButton: {
                            populate: '*'
                        },
                        abilities: {
                            populate: '*'
                        },
                        my_quote: {
                            populate: '*'
                        },
                        image: true
                    }
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
