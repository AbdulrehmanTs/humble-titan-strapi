'use strict';

/**
 *  about controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::about.about', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::about.about', {
            ...query,
            populate: {
                header: {
                    populate: '*'
                },
                hero: {
                    populate: '*'
                },
                section_with_image: {
                    populate: '*'
                },
                trustedByCompanies: {
                    populate: '*'
                },
                ourValue_section: {
                    populate: '*'
                },
                meetTheTeam_section: {
                    populate: {
                        person: {
                            populate: '*'
                        }
                    }
                },
                section_with_image_left: {
                    populate: '*'
                },
                ourOffices: {
                    populate: '*'
                },
                ht_digital_services: {
                    populate: '*'
                },
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
})
);
