import axios from 'axios'

const APPOINTMENT_BASE_REST_API_URL = 'http://localhost:8082/api/availability';
//availability Service Rest API CALL
class AppointmentService{

    getAllAppointments(){
        return axios.get(APPOINTMENT_BASE_REST_API_URL+ '/all')
    }

    createAppointment(appointment){
        return axios.post(APPOINTMENT_BASE_REST_API_URL, appointment)
    }

    getAppointmentById(dcode){
        return axios.get(APPOINTMENT_BASE_REST_API_URL +'/' + dcode);
    }

    updateAppointment(appointmentId, appointment){
        return axios.put(APPOINTMENT_BASE_REST_API_URL + '/' +appointmentId, appointment);
    }

    deleteAppointment(appointmentId){
        return axios.delete(APPOINTMENT_BASE_REST_API_URL + '/' + appointmentId);
    }
}

export default new AppointmentService();