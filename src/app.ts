import express from 'express';
import corssMiddleware from './middlewares/cors.middleware';

class ResponseModel {
    constructor(private statusCode: number, private message: string) { }
}


const app = express();

app.use(corssMiddleware)


app.get('/', (req, res) => {
    res.status(200).json(new ResponseModel(200, 'from home get'))
})

app.post('/', (req, res) => {
    res.status(200).json(new ResponseModel(200, 'from home post'))
})


app.listen(8080, () => {
    console.log('servre is running on http://localhost:8080');
})