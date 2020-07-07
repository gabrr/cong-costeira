import { Request, Response } from 'express';
import Users from '../db/schemas/users'

export default class PeopleController {
    async index(req: Request, res: Response) {
        return await Users.find()
    }
}