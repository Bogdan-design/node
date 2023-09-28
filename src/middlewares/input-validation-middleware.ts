import {Request,Response,NextFunction} from "express";
import {body, validationResult} from "express-validator";

export const inputValidationMiddleware = (req:Request,res:Response, next: NextFunction) =>{
    const result = validationResult(req)
    if (result.isEmpty()) {
        return res.send(`Hello, ${req.query.person}!`)
    }

    res.send({ errors: result.array() })
    next()
}

export const titleValidation = body('title').notEmpty().isLength({
    min: 3,
    max: 10
}).withMessage('title should be from 3 to 10 symbols')
