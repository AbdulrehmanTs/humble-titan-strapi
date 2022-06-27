'use strict';

/**
 *  tram-seo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tram-seo.tram-seo', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::tram-seo.tram-seo', {
            ...query,
            populate: {
                header: {
                    populate: '*'
                },
                hero: {
                    populate: '*'
                },
                seo_courses_cards: {
                    populate: {
                        seoCourseCards: {
                            populate: "*"
                        }
                    }
                },
                tramPackages: {
                    populate: {
                        tramSinglePackage: {
                            populate: "*"
                        }
                    }
                },
                otherCoreOfferings: {
                    populate: {
                        otherOfferingsCards: {
                            populate: "*"
                        }
                    }
                },
                exploreFreeCourse: {
                    populate: '*'
                },
                tramSeoLessons: {
                    populate: {
                        seoLessonCard: {
                            populate: '*'
                        },
                        viewAllBtn: {
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
