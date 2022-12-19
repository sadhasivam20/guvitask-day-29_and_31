import logo from "./logo.svg";
import "./CSS/sb-admin-2.css";
// import "./CSS/sb-admin-2.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import SideBar from "./Sidebar";
// import NavBar from "./NavBar";
import Dashboard from "./Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";

import Portal from "./Portal";
import Userview from "./Userview";
import Createuser from "./Createuser";

import Edituser from "./Edituser";
import Product from "./Products/product";
import Createprod from "./Products/Createprod";
import Prodview from "./Products/Prodview";
import Prodedit from "./Prodedit";
import Login from "./Login";
function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
        <Route path="dashboard" element={<Dashboard/>} />
          
          <Route path="student" element={<Users />} /> 
          
          <Route path="create-student" element={<Createuser />} />
          <Route path="student/:userviewid" element={<Userview />} />
          <Route path="student/edit/:id" element={<Edituser />} />
          
          <Route path="teacher" element={<Product />} />
          
          <Route path="create-teacher" element={<Createprod />} />
          <Route path="teacherview/:id" element={<Prodview />} />
          <Route path="teacheredit/:id" element={<Prodedit/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;