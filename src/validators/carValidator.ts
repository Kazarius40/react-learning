import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string()
        .pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .min(1)
        .max(20)
        .messages({'string.pattern.base': 'Не відповідні символи'}),
    year: Joi.number(),
    price: Joi.number(),
})