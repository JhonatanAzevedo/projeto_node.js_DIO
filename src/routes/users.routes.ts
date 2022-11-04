import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const usersRouter = Router();

usersRouter.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Renan' }];
    res.status(StatusCodes.OK).send({ users });
});

usersRouter.get('/users/:userId', (req: Request<{ userId: string }>, res: Response, next: NextFunction) => {
    const userId = req.params.userId;
    res.status(StatusCodes.OK).send({ userId });
});

usersRouter.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
});

usersRouter.put('/users/:userId', (req: Request<{ userId: string }>, res: Response, next: NextFunction) => {
    const userId = req.params.userId;
    res.status(StatusCodes.OK).send({ userId });
});

usersRouter.delete('/users/:userId', (req: Request<{ userId: string }>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});

export default usersRouter;