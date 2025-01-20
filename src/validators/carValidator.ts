import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string(),
    year: Joi.number(),
    price: Joi.number(),
})