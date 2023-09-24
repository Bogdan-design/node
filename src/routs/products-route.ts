import {Request, Response, Router} from "express";

export const addressesRouter = Router({})

const addresses = [{id: 1, value: 'Nezalejnasti 12'}, {id: 2, value: 'Selikaga 11'}]

addressesRouter.get('/', (req: Request, res: Response) => {
    res.send(addresses)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    const address = addresses.find(a => a.id === +req.params.id)
    if (address) {
        res.send(address)
    }
    res.send(404)
})
