
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Community from "./components/Community/Community";
import AdminHomeMain from "./components/Dashboard/AdminDashboard/AdminHome/AdminHomeMain/AdminHomeMain";
import Footer from "./components/Home/Footer/Footer";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import Contact from "./components/Pages/Contact/Contact";
import Service from "./components/Service/Service";
import Header from "./components/Share/Header/Header";
import SingleDoctor from "./components/SingleDoctor/SingleDoctor";
import Specialization from "./components/Specialization/Specialization";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/commonity" element={<Community />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/adminhome" element={<AdminHomeMain />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleDoctor/:id" element={<SingleDoctor />} />
          <Route path="/specialization" element={<Specialization />} />
          <Route path="/specialization" element={<Specialization />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
