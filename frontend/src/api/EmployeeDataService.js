import axios from 'axios';
import {API_URL} from '../Constants.js';

class EmployeeDataService {

    retrieveEmployees(name) {
        return axios.get(`${API_URL}/${name}/employees`);
    }

    retrieveEmployee(name, id) {
        return axios.get(`${API_URL}/${name}/employees/${id}`);
    }

    deleteEmployee(name,id) {
        return axios.delete(`${API_URL}/${name}/employees/${id}`);
    }

    updateEmployee(name, id, employee) {
        return axios.put(`${API_URL}/${name}/employees/${id}`, employee);
    }

    createEmployee(name, employee) {
        return axios.post(`${API_URL}/${name}/employees/`, employee);
    }

}

export default new EmployeeDataService()