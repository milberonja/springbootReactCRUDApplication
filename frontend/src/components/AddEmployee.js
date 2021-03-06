import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import employeeService from "../services/employee.service";

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    
    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {name, location, department, id};
        if(id){
            //update the record
            employeeService.update(employee)
                .then(response => {
                    console.log("employee updated successfully", response.data);
                    navigate("/");
                })
                .catch(error => {
                    console.log('something went wrong', error);
                });
        } else {
            //create the record
            employeeService.create(employee)
                .then(response => {
                    console.log("employee added successfully", response.data);
                    navigate("/");
                })
                .catch(error => {
                    console.log('something went wrong', error);
                });
        }
    }

    useEffect(() => {
        if(id){
            employeeService.getById(id)
                .then(employee => {
                    setName(employee.data.name);
                    setLocation(employee.data.location);
                    setDepartment(employee.data.department);
                })
                .catch(error => {
                    console.log("something went wrong", error);
                });
        }
    }, []);

    return ( 
        <div className="container">
            <h3>Add Employees</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Enter name"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="department" value={department} onChange={e => setDepartment(e.target.value)} placeholder="Enter Department"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="location" value={location} onChange={e => setLocation(e.target.value)} placeholder="Enter Location"/>
                </div>
                <div>
                    <button onClick={e => saveEmployee(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
     );
}
 
export default AddEmployee;