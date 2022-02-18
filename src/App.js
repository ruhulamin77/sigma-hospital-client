
import Community from "./components/Community/Community";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Home/Footer/Footer";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import Contact from "./components/Pages/Contact/Contact";
import Header from "./components/Share/Header/Header";
import SingleDoctor from "./components/SingleDoctor/SingleDoctor";
import Service from "./components/Service/Service";
import Specialization from "./components/Specialization/Specialization";
import AdminHomeMain from "./components/Dashboard/AdminDashboard/AdminHome/AdminHomeMain/AdminHomeMain";


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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
