import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Home/Footer/Footer";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import Community from "./components/Community/Community";

import Header from "./components/Share/Header/Header";
import SingleDoctor from "./components/SingleDoctor/SingleDoctor";
import Service from "./components/Service/Service";
import Specialization from "./components/Specialization/Specialization";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/commonity" element={<Community />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/service" element={<Service />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
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
