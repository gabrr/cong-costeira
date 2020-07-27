import { AppointmentsType } from './../../types/appoitments';

export const addAppointment = (data: AppointmentsType[]) => ({
    type: 'ADD_APPOINTMENT',
    data
})

export const clearAppointment = () => ({
    type: 'CLEAR_APPOINTMENT'
})