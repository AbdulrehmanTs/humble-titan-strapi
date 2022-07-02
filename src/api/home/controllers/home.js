'use strict';

/**
 *  home controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::home.home', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::home.home', {
            ...query,
            populate: {
                Header: {
                    populate: '*'
                },
                Hero: {
                    populate: '*'
                },
                weBoostSection: {
                    populate: {
                        actionButton: true,
                        images: true,
                        link: true,
                        title_with_picture: {
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
                ourServices: {
                    populate: {
                        BackgroundImage: true,
                        marketSmarter: {
                            populate: '*'
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
                tellUs_section: {
                    populate: '*'
                },
                theHumbleTrader: {
                    populate: '*'
                },
                TRAMSearchEngine: {
                    populate: {
                        actionButton: true,
                        images: true,
                        link: true,
                        title_with_picture: {
                            populate: '*'
                        }
                    }
                },
                WeAreAFullService: {
                    populate: '*'
                },
                beHumbleVoter: {
                    populate: '*'
                },
                no_matter_who_you_are: {
                    populate: {
                        vertical_cards: {
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
