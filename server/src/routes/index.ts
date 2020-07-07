import express from "express";
import PeopleController from '../controllers/peopleController'
import AppointmentsController from '../controllers/appointmentsController'


const routes = express.Router()


const peopleController = new PeopleController()
const appointmentsController = new AppointmentsController()

routes.get('/people/', peopleController.index)
routes.post('/appointments/', appointmentsController.create)

export default routes 