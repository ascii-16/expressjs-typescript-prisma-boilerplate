import * as path from 'path';
import { Router, Request, Response } from 'express';

const home: Router = Router();

home.get('/', (_req: Request, res: Response) => {
  try {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.toString(),
    });
  }
});

export default home;
