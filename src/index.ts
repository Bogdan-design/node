import express, {Request,Response} from 'express';
const app = express()
const port = 3001

app.get('/', (req: Request, res: Response) => {
    const helloAnyone = 'Hello anyone!';
    res.send(helloAnyone)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})