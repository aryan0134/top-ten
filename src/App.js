import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dentists from "./pages/Dentists";
import Accountants from "./pages/Accountants";
import GeneralPhysicians from "./pages/GeneralPhysicians";
import Immigration from "./pages/Immigration";
import InsuranceAgents from "./pages/InsuranceAgents";
import Lawyers from "./pages/Lawyers";
import Optimetrists from "./pages/Optimetrists";
import Physiotherapists from "./pages/Physiotherapists";
import Realtors from "./pages/Realtors";
import Saloons from "./pages/Saloons";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/dentists" element={<Dentists />}/>
            <Route path="/accountants" element={<Accountants />}/>
            <Route path="/generalPhysicians" element={<GeneralPhysicians />}/>
            <Route path="/immigration" element={<Immigration />}/>
            <Route path="/insuranceAgents" element={<InsuranceAgents />}/>
            <Route path="/lawyers" element={<Lawyers />}/>
            <Route path="/optimetrists" element={<Optimetrists />}/>
            <Route path="/physiotherapists" element={<Physiotherapists />}/>
            <Route path="/realtors" element={<Realtors />}/>
            <Route path="/saloons" element={<Saloons />}/> 
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
