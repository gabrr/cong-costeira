import { Request, Response } from 'express';
import Appointments from '../db/schemas/appointments'

export default class AppointmentController {
    async create(req: Request, res: Response) {
        console.log(req.body, 'req bodys')
        try {
            const newUsers = new Appointments({
                name1: req.body.name1,
                name2: req.body.name2,
                name3: req.body.name3,
                when: req.body.when
            })
            
            return {gabriel: 'name'}
            await newUsers.save().then(user => res.json(user))
            return newUsers
        } catch (err) {
            return err.message
        }
    }
}