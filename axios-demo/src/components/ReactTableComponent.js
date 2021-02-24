import React from "react";
import { Table, Button } from 'reactstrap';
import "react-table/react-table.css";
import ApiService from "../service/ApiService";
import './ReactTableComponent.css';

class ReactTableComponent extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      data: [],
      first_name: "",
      last_name: "",
      email: "",
      id: "",
      isEditMode: false
    };

    this.state = this.initialState;
  }


  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };



  getRecordById = (id = 0) => {

    ApiService.fetchEmployeeById(id).then(res => {
      // console.log("Result From Data");
      // console.log(res);
      // console.log("Result From Data");
      this.setState(
        res.data
      );
      this.setState({
        isEditMode: true
      });
    });
  }

  editRow = row => {
    // TODO: Edit Call here
    console.log("inside edit row", row);
    ApiService.editEmployee({
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
      "email": this.state.email,
      "id": this.state.id
    }).then(res => {
      console.log("in edit method ...");
      this.setState({
        isEditMode: false
      });
      this.setState(this.initialState);
      this.reloadData();
    })

  };

  addRow = () => {
    ApiService.addEmployee({
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
      "email": this.state.email,
      "id": this.state.id
    }).then(res => {
      console.log("in add method ...");
      this.setState(this.initialState);
      this.reloadData();
    })
  };

  deleteRow = id => {
    // TODO: Delete Confirm Box
    ApiService.deleteEmployee(id).then(res => {
      this.reloadData();
    })
  };

  reloadData = () => {
    ApiService.fetchEmployees('http://localhost:3000/employees')
      .then(res => {
        console.log("data ... ", res.data);
        this.setState({
          data: res.data,
        })
      })
  };

  componentDidMount() {
    this.reloadData();
  };

  render() {
    const { data } = this.state;
    return (
      <div style={{ padding: '50px' }}>


        <div class="jumbotron">
          <h1 class="display-4">React - Integration with Axios !</h1>
          <hr class="my-4" />

        </div>
        <h2 className="react-table-component">Employee Details</h2>
        <form class="form-inline" style={{ paddingBottom: 20 }}>
          <label for="email" style={{ margin: 20 }}>First Name:</label>
          <input type="text" class="form-control" id="first_name" value={this.state.first_name} onChange={this.handleChange} />
          <label for="email">Last Name:</label>
          <input type="text" class="form-control" id="last_name" value={this.state.last_name} onChange={this.handleChange} />
          <label for="email">Email:</label>
          <input type="text" class="form-control" id="email" value={this.state.email} onChange={this.handleChange} />
          <label for="email">Id:</label>
          <input type="text" class="form-control" id="id" value={this.state.id} onChange={this.handleChange} disabled={(!this.state.isEditMode) ? "" : "disabled"} />
          <button type="button" class="btn btn-primary" onClick={() => (this.state.isEditMode) ? this.editRow() : this.addRow()}>
            {(this.state.isEditMode) ? "Update" : "Add"}

          </button>
        </form>
        

{/* <pre>{JSON.stringify(data)}</pre> */}

    <Table striped>
      <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => <tr>
          <td scope="row">{item.id}</td>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
          <td><Button color="primary " onClick={() => {
                  this.getRecordById(item.id);
                }}>Edit</Button></td>
          <td><Button color="danger"  onClick={() => {
                  this.deleteRow(item.id);
                }}>Delete</Button></td>
        </tr>)}
        
      </tbody>
    </Table>
      </div>
    );
  }
}

export default ReactTableComponent;