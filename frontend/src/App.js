import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EmployeesList from "./components/EmployeesList";
import NotFound from "./components/NotFound";


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeesList/>}/> 
          <Route path="/add" element={<AddEmployee/>}/> 
          <Route path="/employees/edit/:id" element={<AddEmployee/>}/> 
          <Route path="*" element={<NotFound/>}/> 
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App;