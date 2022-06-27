'use strict';

/**
 *  products-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::products-page.products-page', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::products-page.products-page', {
            ...query,
            populate: {
                header: {
                    populate: '*'
                },
                hero: {
                    populate: '*'
                },
                products_list: {
                    populate: {
                        product_cards: {
                            populate: '*'
                        }
                    }
                },
                other_products: {
                    populate: {
                        product_cards: {
                            populate: '*'
                        }
                    }
                },
                requestAQuote_section: {
                    populate: '*'
                },
                explore: {
                    populate: {
                        Offerings: {
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
