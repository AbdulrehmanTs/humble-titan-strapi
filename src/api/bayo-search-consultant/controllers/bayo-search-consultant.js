'use strict';

/**
 *  bayo-search-consultant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bayo-search-consultant.bayo-search-consultant', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::bayo-search-consultant.bayo-search-consultant', {
            ...query,
            populate: {
                header: {
                    populate: '*'
                },
                hero: {
                    populate: '*'
                },
                myIntro_section: {
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
                what_I_offer_section: {
                    populate: '*'
                },
                what_you_get: {
                    populate: {
                        features: {
                            populate: '*'
                        }
                    }
                },
                who_I_am: {
                    populate: "*"
                },
                Iam_trustedBy_section: {
                    populate: '*'
                },
                feedback: {
                    populate: '*'
                },
                questions_to_ask: {
                    populate: {
                        traditional_marketing_qs: {
                            populate: {
                                questions: {
                                    populate: "*"
                                }
                            }
                        }
                    }
                },
                organizations_I_work_with: {
                    populate: {
                        feature: {
                            populate: '*'
                        }
                    }
                },
                chapters: {
                    populate: {
                        chapterIntro: {
                            populate: '*'
                        },
                        theStory: {
                            populate: '*'
                        },
                        getInTouch: {
                            populate: '*'
                        },
                        theReturn: {
                            populate: '*'
                        },
                        jumpToChapters: {
                            populate: {
                                chapterLinks: {
                                    populate: '*'
                                }
                            }
                        },
                        chapterConclusion: {
                            populate: '*'
                        }
                    }
                }
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
})
);
