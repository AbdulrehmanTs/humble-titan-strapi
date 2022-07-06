'use strict';

/**
 *  service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service.service', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::service.service', {
            ...query,
            populate: {
                header: {
                    populate: '*'
                },
                service_specialties: {
                    populate: '*'
                },
                whatYouCanExpect: {
                    populate: '*'
                },
                service_features: {
                    populate: {
                        features: {
                            populate: "*"
                        },
                        actionButton: {
                            populate: "*"
                        }
                    }
                },
                business_impact: {
                    populate: '*'
                },
                ourValue: {
                    populate: '*'
                },
                topSection: {
                    populate: "*"
                },
                our_commitment: {
                    populate: {
                        service_deliverables: {
                            populate: '*'
                        },
                        commitmentCard2: {
                            populate: '*'
                        }
                    }
                },
                contact2: {
                    populate: '*'
                },
                tellUs_section: {
                    populate: '*'
                },
                otherServices: {
                    populate: {
                        otherService: {
                            populate: '*'
                        },
                        actionButton: {
                            populate: "*"
                        }
                    }
                },
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));
