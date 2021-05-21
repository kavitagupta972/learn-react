
import { useEffect, useState } from 'react';
import {Table} from 'reactstrap';
import ApiServices from './Services/ApiServices';
import './TableComponent.css';
function TableComponent() {

    const [tableData, setTableData] = useState([]);
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const[isEditMode, setEditMode] = useState(false);

    const loadData = () => {
        ApiServices.fetchEmployees().then(response => {
            console.log(response)
           setTableData(response.data);
        })
    }

    function getEmployeeDetailById(id) {
        ApiServices.fetchEmployeeDetailById(id).then((res) => {
            setFirstName(res.data.first_name);
            setLastName(res.data.last_name);
            setEmail(res.data.email);
            setId(res.data.id);
            setEditMode(true);
        })
    }

    useEffect(() =>{
        loadData();
    }, []);

    function onFirstNameChange(event){
        setFirstName(event.target.value);
    }

    function addRecord(event){
        event.preventDefault();
        console.log("Add employee detail");

        ApiServices.addEmployeeDetail({
            first_name,
            last_name,
            email,
            id
        })
        .then(res => {
            console.log('data added successfully');
            loadData();
        })
        .catch(err => console.log('error while adding the data'));
    }

    function deleteRecord(id) {
        console.log(id);
        ApiServices.deleteEmployeeDetail(id).then(res => {
            loadData();
        });
    }

    function updateRecord(){
        ApiServices.updateEmployeeDetail({
            first_name,
            last_name,
            email,
            id
        }).then(res => {
            setEditMode(false);
            loadData();
            clearInputs();
        })
    }
    
    function clearInputs() {
        setFirstName("");
        setLastName("");
        setEmail("");
        setId("");
    }


    return (
        <div className = "table-container">
            <h1>AXIOS - CRUD Demo</h1>
            <h2>Add Employee Details</h2>
            <div className = "add-form">
                <form className = "form-inline">
                    <label>first name : </label>
                    <input type= "text"
                    id="first_name"
                    placeholder = "enter first name"
                    value = {first_name}
                    onChange = {onFirstNameChange}
                />
                 <label>last name : </label>
                    <input type= "text"
                    id="last_name"
                    placeholder = "enter last name"
                    value = {last_name}
                    onChange = {event => {setLastName(event.target.value)}}
                />
                 <label>email : </label>
                    <input type= "text"
                    id="email"
                    placeholder = "enter email"
                    value = {email}
                    onChange = {event => {setEmail(event.target.value)}}
                />
                 <label>id : </label>
                    <input type= "text"
                    id="id"
                    placeholder = "enter id"
                    value = {id}
                    onChange = {event => {setId(event.target.value)}}
                    disabled = {!isEditMode ? "" : "disabled"}
                />
                <button type = "button" onClick={() => {isEditMode? updateRecord() : addRecord()}}>{isEditMode ? "Update" : "Add"}</button>
                <button type = "reset" onClick = {clearInputs}>Reset</button>
                </form>
            </div>

            <h1> Data GRID!!!!</h1>
            <Table className="data-table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>first name</th>
                        <th>last name</th>
                        <th>email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { tableData.map( emp => 
                        <tr key = {emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.first_name}</td>
                            <td>{emp.last_name}</td>
                            <td>{emp.email}</td>
                            <td>
                                <button onClick = {() => {getEmployeeDetailById(emp.id);}}>Edit</button>
                                <button onClick = {() => {deleteRecord(emp.id);}}>delete</button>
                            </td>
                        </tr>
                    )}
                   
                </tbody>
            </Table>
        </div>
    );
}

export default TableComponent;