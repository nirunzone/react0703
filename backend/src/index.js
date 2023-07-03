import express from 'express';
import dotenv from 'dotenv';
import webRoute from './routers/web.js';


dotenv.config();

const app = express();

app.use(webRoute);

// app.get('/',(req,res)=>{
//     res.send('Hello Tusharika!');
// });
const port = process.env.PORT || 3000;
const server = process.env.HTTP_SERVER || 'localhost';

app.listen(port,()=>{
    console.log(`Started server listening or running on server is to port from ${server}:${port}`);
});



// import express from 'express';
// import dotenv from 'dottenv';
// import webRouter from './routers/web.js';

// dotenv.config();

// const app = express();

// app.use(webRouter);

// app.get('/',(req, res)=>{
//     res.send('Hello World!');
// });

// const port = process.env.PORT || 3000;
// const server = process.env.HTTP_SERVER || 'localhost'
// app.listen(port, ()=>{
//     console.log(`Server is running on ${server}: ${port}`);
// });