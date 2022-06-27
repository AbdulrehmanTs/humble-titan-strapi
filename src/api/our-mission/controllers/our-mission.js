'use strict';

/**
 *  our-mission controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::our-mission.our-mission', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::our-mission.our-mission', {
            ...query,
            populate: {
                header: {
                    populate: '*'
                },
                hero: {
                    populate: '*'
                },
                donate: {
                    populate: '*'
                },
                discover_what_we_teach: {
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
                discover_how: {
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
                discover_why_and_where: {
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
                discover_those_we_plan_to_impact: {
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
                discover_more: {
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
