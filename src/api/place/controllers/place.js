'use strict';

/**
 *  place controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::place.place', ({ strapi }) => ({
  async create(ctx) {
    ctx.request.body.data.userId = ctx.state.user.id
    return super.create(ctx);
  }
}))
