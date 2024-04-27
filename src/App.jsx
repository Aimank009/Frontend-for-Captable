import "./App.css";
import { useState, useEffect } from "react";
import { init } from "./utils/fhevm";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import CreateCompany from "./Pages/CreateCompany";
import CreateCompanyKey from "./Pages/CreateCompanyKey";
import CompanyKey from "./Pages/CompanyKey";
import Allocations from "./Pages/Allocations";
import AlreadyOwner from "./Pages/AlreadyOwner";
import Dashboard_emp from "./Pages/Dashboard_emp";
import EmployeeLogin from "./Pages/EmployeeLogin";

function App() {
  const [isInitialized, setIsInitialized] = useState(true);

  useEffect(() => {
    init()
      .then(() => {
        setIsInitialized(true);
      })
      .catch(() => setIsInitialized(false));
  }, []);

  if (!isInitialized) return null;

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/createCompany" element={<CreateCompany />} />
          <Route exact path="/createCompanyKey" element={<CreateCompanyKey />} />
          <Route exact path="/companyKey" element={<CompanyKey />} />
          <Route exact path="/allocations" element={<Allocations />} />
          <Route exact path="/alreadyOwner" element={<AlreadyOwner />} />
          <Route exact path="/dashboard" element={<Dashboard_emp />} />
          <Route exact path="/employeeLogin" element={<EmployeeLogin/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
