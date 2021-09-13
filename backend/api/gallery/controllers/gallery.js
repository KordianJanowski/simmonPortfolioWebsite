'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findOne(ctx) {
    const { code } = ctx.params;

    const entity = await strapi.services.gallery.findOne({ code });
    return sanitizeEntity(entity, { model: strapi.models.gallery });
  },
  async find(ctx) {
    const galleries = await strapi.services.gallery.find();

    galleries.map(async gallery =>{
      if(Date.parse(gallery.timeToDelete)
          <=
        Number(new Date)
      ){
        const entity = await strapi.services.gallery.delete({ id: gallery.id });
        return sanitizeEntity(entity, { model: strapi.models.gallery });
      }
    })

    return sanitizeEntity(galleries, { model: strapi.models.gallery });
  },
};
