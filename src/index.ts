
import express, { Request, Response, NextFunction } from 'express';
import usersRouter from './routes/users.routes';

const app = express();

//configuracao da aplicacao para entender o Json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configuracao de rotas
app.use(usersRouter);


//inicializacao do servidor
app.listen(3000, () => {
    console.log('Hello word');
});


