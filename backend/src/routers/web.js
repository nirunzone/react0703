import express from 'express';
import UserController from '../controllers/UserController.js';

const webRouter = express.Router();
const UserInstance = new UserController();

webRouter.get('/', UserInstance.index);

// webRouter.get('/',(req, res)=>{
//     res.send('Hello World!');
// })

//     webRouter.get('/user', (req, res)=>{
//         res.send('Hello Users!');
//     });

export default webRouter;
