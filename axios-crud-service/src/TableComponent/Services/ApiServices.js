import axios from 'axios';

const EMP_DATA_URL = "http://localhost:3000/employees";

class ApiService {

    fetchEmployees() {
        return axios.get(EMP_DATA_URL);
    }

    fetchEmployeeDetailById(id) {
        return axios.get(EMP_DATA_URL+'/'+id);
    }
    addEmployeeDetail(employee){
        return axios.post(EMP_DATA_URL, employee);
    }

    deleteEmployeeDetail(id) {
        return axios.delete(EMP_DATA_URL+'/'+id);
    }

    updateEmployeeDetail(employee) {
        return axios.put(EMP_DATA_URL+"/"+employee.id, employee)
    }
}

export default new ApiService();