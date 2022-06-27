'use strict';

/**
 *  education controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::education.education', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::education.education', {
            ...query,
            populate: {
                header: {
                    populate: '*'
                },
                hero: {
                    populate: '*'
                },
                educationalDictionaries: {
                    populate: {
                        feature: {
                            populate: '*'
                        }
                    }
                },
                discover_full_seo_course: {
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
                discover_ht_magazine: {
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
                services_gallery: {
                    populate: {
                        single_service: {
                            populate: '*'
                        }
                    }
                },
                ht_mind_mag: {
                    populate: {
                        feature: {
                            populate: '*'
                        }
                    }
                },
                explore: {
                    populate: {
                        Offerings: {
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
