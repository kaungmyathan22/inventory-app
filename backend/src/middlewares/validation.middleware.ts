import { BadRequestException } from "@exceptions/badRequest.exception";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { RequestHandler } from "express";

function validationMiddleware<T>(type: any, skipMissingProperties = false): RequestHandler {
  return (req, res, next) => {
    validate(plainToClass(type, req.body), { skipMissingProperties })
      .then((errors: ValidationError[]) => {
        if (errors.length > 0) {
            const message =errors.map(error=>({[error.property]:Object.values(error.constraints)}));
            next(new BadRequestException(message))
        } else {
          next();
        }
      });
  };
}

export default validationMiddleware;