import { Request, Response } from 'express';

export const API = {
    pong: (_req: Request, res: Response) => {
        res.status(200).json({ message: 'pong' });
    }
}