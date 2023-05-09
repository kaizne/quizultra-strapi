/**
 * quiz controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::quiz.quiz', ({ strapi }) =>  ({
    async findOne(ctx) {
        const { slug } = ctx.params
        const entity = await strapi.db.query('api::quiz.quiz').findOne({
            where: { slug },
            populate: {
                image: true,
                media: true,
                questions: {
                    populate: {
                        media: true
                    }   
                }
            }
        })
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
        return this.transformResponse(sanitizedEntity)
      }
}))
