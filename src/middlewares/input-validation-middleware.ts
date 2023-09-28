import {Request,Response,NextFunction} from "express";
import {validationResult} from "express-validator";

export const inputValidationMiddleware = (req:Request,res:Response, next: NextFunction) =>{
    const result = validationResult(req)
    if (result.isEmpty()) {
        return res.send(`Hello, ${req.query.person}!`)
    }

    res.send({ errors: result.array() })
    next()
}