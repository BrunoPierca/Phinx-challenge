import * as Joi from "joi"

export const JoiValidationSchema = Joi.object({
    DB_FILE_NAME: Joi.required(),
})