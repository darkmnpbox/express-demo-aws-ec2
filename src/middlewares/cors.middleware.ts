import cors from 'cors';

type StaticOrigin = boolean | string | RegExp | (boolean | string | RegExp)[];


const whiteList: string[] = ['http://localhost:8082', 'http://localhost:8081', 'http://127.0.0.1:5500'];

// simple

const corsOptions: cors.CorsOptions = {
    origin: 'http://127.0.0.1:5500',
    methods: ['GET']
}


// multi UI
// const corsOptions: cors.CorsOptions = {
//     origin: ['http://127.0.0.1:5500' , ...],
//     methods: ['post']
// }



// custom made

// const corsOptions: cors.CorsOptions = {
//     origin: (origin: string, callback: (err: Error | null, origin?: StaticOrigin) => void) => {
//         if (whiteList.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             // callback(new Error('Not allowed header'))
//             console.log('some mtf trying to fucking with you');
//         }
//     }
// }

const corssMiddleware = cors(corsOptions);
export default corssMiddleware;