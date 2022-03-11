import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogForm from "./components/Blog/BlogForm/BlogForm";
import Blogs from "./components/Blog/Blogs/Blogs";
import SingleBlog from "./components/Blog/SingleBlog/SingleBlog";
import ChatPage from "./components/ChatHome/ChatPage/ChatPage";
import AdminHomeMain from "./components/Dashboard/AdminDashboard/AdminHome/AdminHomeMain/AdminHomeMain";
import DashboardMain from "./components/Dashboard/DashboardMain/DashboardMain";
import AddDoctors from "./components/Dashboard/DoctorsDashboard/AllDoctors/AddDoctors/AddDoctors";
import AllDoctors from "./components/Dashboard/DoctorsDashboard/AllDoctors/AllDoctors/AllDoctors";
import DoctorProfile from "./components/Dashboard/DoctorsDashboard/DoctorProfile/DoctorProfile";
import AddNurse from "./components/Dashboard/NurseDashboard/AllNurse/AddNurse/AddNurse";
import AllNurse from "./components/Dashboard/NurseDashboard/AllNurse/AllNurse/AllNurse";
import NurseProfileUpdate from "./components/Dashboard/NurseDashboard/NurseProfileUpdate/NurseProfileUpdate";
import PatientData from "./components/Dashboard/PatientDashboard/PatientData/PatientData/PatientData";
import PatientPrescription from "./components/Dashboard/PatientDashboard/PatientPrescription/PatientPrescription";
import Cart from "./components/Dashboard/Pharmacy/Cart/Cart";
import Order from "./components/Dashboard/Pharmacy/Order/Order";
import PharmacyHome from "./components/Dashboard/Pharmacy/PharmacyHome/PharmacyHome";
import ProductRecive from "./components/Dashboard/Pharmacy/ProductRecive/ProductRecive";
import Appointment from "./components/Home/Appointment/Appointment";
import AppointmentHeader from "./components/Home/Appointment/AppointmentHeader";
import Home from "./components/Home/Home/Home";
import AdminLoginForm from "./components/Login/AdminLoginForm/AdminLoginForm";
import AdminSignUp from "./components/Login/AdminSignUp/AdminSignUp";
import Login from "./components/Login/Login/Login";
import OnlineDoctor from "./components/OnlineDoctor/OnlineDoctor";
import Contact from "./components/Pages/Contact/Contact";
import FAQ from "./components/Pages/FAQ/FAQ";
import History from "./components/Pages/History/History";
import DoctorHeader from "./components/Pages/Team/DoctorHeader";
import Team from "./components/Pages/Team/Team";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Service from "./components/Service/Service";
import PaymentForm from "./components/Share/Payment/PaymentForm/PaymentForm";
import Success from "./components/Share/Payment/Validation/Success";
import SingleDoctor from "./components/SingleDoctor/SingleDoctor";
import Audiologist from "./components/Specialization/Audiologist/Audiologist";
import Cardiologist from "./components/Specialization/Cardiologist/Cardiologist";
import ENTspecialist from "./components/Specialization/ENTspecialist/ENTspecialist";
import Neurologist from "./components/Specialization/Neurologist/Neurologist";
import Oncologist from "./components/Specialization/Oncologist/Oncologist";
import Psychiatrists from "./components/Specialization/Psychiatrists/Psychiatrists";

import BloodDashboardMain from "./components/BloodDashboard/BloodDashboardMain/BloodDashboardMain";
import BloodDashboardHome from "./components/BloodDashboard/BloodDashboardHome/BloodDashboardHome";
import AllDonors from "./components/BloodDashboard/AllDonor/AllDonor/AllDonors";
import SinglePatientPrescription from "./components/Dashboard/PatientDashboard/SinglePatientPrescription/SinglePatientPrescription";
import BloodRequest from "./components/BloodDashboard/AllDonor/BloodRequest/BloodRequest";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<AppointmentHeader />} />
          </Route>

          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/onlineDoctor" element={<OnlineDoctor />} />
          <Route path="/adminhome" element={<AdminHomeMain />} />
          <Route path="/paymentForm" element={<PaymentForm />} />
          <Route path="/success/:id" element={<Success />} />
          <Route path="/adminRegister" element={<AdminSignUp />} />
          <Route path="/adminLogin" element={<AdminLoginForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/team" element={<Team />} />
          {/* <Route path="/chat" element={<ChatPage />} /> */}
          <Route path="/doctor" element={<DoctorHeader />} />
          <Route path="/blogForm" element={<BlogForm />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/medicineCart" element={<Cart />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/about" element={<History />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleDoctor/:id" element={<SingleDoctor />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/team/:id" element={<SingleDoctor />} />
          <Route path="/specialization/oncologist" element={<Oncologist />} />
          <Route path="/specialization/neurologist" element={<Neurologist />} />
          <Route
            path="/specialization/ent-specialist"
            element={<ENTspecialist />}
          />
          <Route
            path="/specialization/cardiologist"
            element={<Cardiologist />}
          />
          <Route path="/specialization/audiologist" element={<Audiologist />} />
          <Route
            path="/specialization/psychiatrists"
            element={<Psychiatrists />}
          />

          {/* dashboard */}
          <Route path="/dashboard" element={<DashboardMain />}>
            <Route path="/dashboard" element={<AdminHomeMain />}></Route>
            <Route
              path="/dashboard/appointment"
              element={<Appointment />}
            ></Route>
            <Route path="/dashboard/chat" element={<ChatPage />}></Route>

            {/* doctor route start */}
            <Route path="/dashboard/allDoctors" element={<AllDoctors />} />
            <Route
              path="/dashboard/allDoctors/update/:id"
              element={<DoctorProfile />}
            />
            <Route path="/dashboard/addDoctors" element={<AddDoctors />} />
            {/*  doctor route end */}
            {/* nurse route start */}
            <Route path="/dashboard/addNurse" element={<AddNurse />} />
            <Route path="/dashboard/allNurse" element={<AllNurse />} />
            <Route
              path="/dashboard/allNurse/update/:id"
              element={<NurseProfileUpdate />}
            />
            {/* nurse route end */}
            {/* patients route start */}
            <Route path="/dashboard/patientsInfo" element={<PatientData />} />
            <Route
              path="/dashboard/prescription/:id"
              element={<PatientPrescription />}
            />
            <Route
              path="/dashboard/singlePrescription/update/:id"
              element={<SinglePatientPrescription />}
            />

            <Route path="/dashboard/pharmacy" element={<PharmacyHome />} />
            <Route path="/dashboard/order" element={<Order />} />
            <Route path="/dashboard/receive" element={<ProductRecive />} />

            {/* patients route end */}
          </Route>
          {/*  blood bank */}
          <Route path="/bloodBank" element={<BloodDashboardMain />}>
            <Route path="/bloodBank" element={<BloodDashboardHome />}></Route>
            <Route path="/bloodBank/allDOnor" element={<AllDonors />}></Route>
            <Route
              path="/bloodBank/bloodRequest"
              element={<BloodRequest />}
            ></Route>
            <Route
              path="/bloodBank/requestHistory"
              element={<BloodRequest />}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
