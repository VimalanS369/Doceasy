import axios from 'axios'

const CONFIRMATION_BASE_REST_API_URL = 'http://localhost:8081/api/appointment';
//Appointment Service Rest API CALL
class ConfirmationService{

    
    getConfirmationById(dcode){
        return axios.get(CONFIRMATION_BASE_REST_API_URL + '/' + dcode);
    }
    createAppointment(appointment){
        return axios.post(CONFIRMATION_BASE_REST_API_URL, appointment)
    }

}

export default new ConfirmationService();