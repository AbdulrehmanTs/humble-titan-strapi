'use strict';

/**
 *  course controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::course.course', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::course.course', {
            ...query,
            populate: {
                header: {
                    populate: '*'
                },
                hero: {
                    populate: '*'
                },
                tableOfContents: {
                    populate: '*'
                },
                completeMethod: {
                    populate: '*'
                },
                chapters: {
                    populate: {
                        lessonCards: {
                            populate: '*'
                        }
                    }
                },
                tramStandardPacks: {
                    populate: {
                        image: true,
                        tramPackages: {
                            populate: '*'
                        }
                    }
                },
                otherServices: {
                    populate: {
                        otherService: {
                            populate: '*'
                        },
                        actionButton: {
                            populate: '*'
                        }
                    }
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
