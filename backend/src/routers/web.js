import express from 'express';
import UserController from '../controllers/UserController.js';
import NewsController from '../controllers/NewsController.js';


const webRoute = express.Router();
const userController = new UserController();
const newsController = new NewsController();

webRoute.get('/',userController.index);
webRoute.get('/',newsController.news);

webRoute.get('/users',(req, res)=>{
    res.send('Hi Tusharika ko users!');
});

webRoute.get('/niranjan',(req, res)=>{
    res.send('Hi Tusharika niranjanko chori');
});

export default webRoute;




// import express from 'express';
// import UserController from '../controllers/UserController.js';

// const webRouter = express.Router();
// const UserInstance = new UserController();

// webRouter.get('/', UserInstance.index);

// // webRouter.get('/',(req, res)=>{
// //     res.send('Hello World!');
// // })

// //     webRouter.get('/user', (req, res)=>{
// //         res.send('Hello Users!');
// //     });

// export default webRouter;
