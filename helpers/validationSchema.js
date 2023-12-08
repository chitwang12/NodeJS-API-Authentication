const Joi = require('@hapi/joi');
const authSchema = Joi.object({
    email:Joi.string()
            .email()
            .lowercase()
            .required(),
    password:Joi.string()
            .min(2)
            .required()
})

module.exports ={
    //Using object here because we can have multiple objects here 
    authSchema
}