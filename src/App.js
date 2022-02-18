import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import Community from "./components/Community/Community"

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/commonity" element={<Community />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/service" element={<Service />} />
        </Routes>
        <Routes>
          <Route path="/adminhome" element={<AdminHomeMain />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleDoctor/:id" element={<SingleDoctor />} />
        </Routes>
        <Routes>
          <Route path="/specialization" element={<Specialization />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
