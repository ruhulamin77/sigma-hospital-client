import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashLoader } from "react-spinners";
import BlogForm from "./components/Blog/BlogForm/BlogForm";
import Blogs from "./components/Blog/Blogs/Blogs";
import SingleBlog from "./components/Blog/SingleBlog/SingleBlog";
import BloodAdminHome from "./components/BloodAdminDashboard/BloodAdminHome/BloodAdminHome";
import ManageAllDonor from "./components/BloodAdminDashboard/ManageAllDonor/ManageAllDonor";
import ManageBloodDonations from "./components/BloodAdminDashboard/ManageBloodDonations/ManageBloodDonations";
import ManageBloodRequests from "./components/BloodAdminDashboard/ManageBloodRequests/ManageBloodRequests";
import AllDonors from "./components/BloodDashboard/AllDonor/AllDonor/AllDonors";
import BloodDashboardHome from "./components/BloodDashboard/BloodDashboardHome/BloodDashboardHome";
import BloodDashboardMain from "./components/BloodDashboard/BloodDashboardMain/BloodDashboardMain";
import BloodDonation from "./components/BloodDashboard/BloodDonation/BloodDonation";
import BloodDonationHistory from "./components/BloodDashboard/BloodDonationHistory/BloodDonationHistory";
import BloodRequest from "./components/BloodDashboard/BloodRequest/BloodRequest";
import BloodRequestHistory from "./components/BloodDashboard/BloodRequestHistory/BloodRequestHistory";
import RegisterDonor from "./components/BloodDashboard/RegisterDonor/RegisterDonor";
import ChatPage from "./components/ChatHome/ChatPage/ChatPage";
import AdminHomeMain from "./components/Dashboard/AdminDashboard/AdminHome/AdminHomeMain/AdminHomeMain";
import CreateAdmin from "./components/Dashboard/CreateAdmin/CreateAdmin";
// import DashboardLoad from "./components/Dashboard/DashboardLoad/DashboardLoad";
import DashboardMain from "./components/Dashboard/DashboardMain/DashboardMain";
import AddDoctors from "./components/Dashboard/DoctorsDashboard/AllDoctors/AddDoctors/AddDoctors";
import AllDoctors from "./components/Dashboard/DoctorsDashboard/AllDoctors/AllDoctors/AllDoctors";
import DoctorProfile from "./components/Dashboard/DoctorsDashboard/DoctorProfile/DoctorProfile";
import AddNurse from "./components/Dashboard/NurseDashboard/AllNurse/AddNurse/AddNurse";
import AllNurse from "./components/Dashboard/NurseDashboard/AllNurse/AllNurse/AllNurse";
import AppointedPatient from "./components/Dashboard/NurseDashboard/AppointedPatient/AppointedPatient/AppointedPatient";
import NurseProfileUpdate from "./components/Dashboard/NurseDashboard/NurseProfileUpdate/NurseProfileUpdate";
import MedicalTest from "./components/Dashboard/PatientDashboard/MedicalTest/MedicalTest";
import PatientData from "./components/Dashboard/PatientDashboard/PatientData/PatientData/PatientData";
import PatientInvoice from "./components/Dashboard/PatientDashboard/PatientInvoice/PatientInvoice/PatientInvoice";
import SingleInvoice from "./components/Dashboard/PatientDashboard/PatientInvoice/SingleInvoice/SingleInvoice";
import PatientPrescription from "./components/Dashboard/PatientDashboard/PatientPrescription/PatientPrescription";
// import AdminRoute from "./components/PrivateRoute/AdminRoute";
import AddMedicine from "./components/Dashboard/Pharmacy/AddMedicine/AddMedicine";
import Cart from "./components/Dashboard/Pharmacy/Cart/Cart";
import Invoice from "./components/Dashboard/Pharmacy/Invoice/Invoice";
import PdfInvoice from "./components/Dashboard/Pharmacy/Invoice/PdfInvoice";
import Order from "./components/Dashboard/Pharmacy/Order/Order";
import PharmacyHome from "./components/Dashboard/Pharmacy/PharmacyHome/PharmacyHome";
import ProductRecive from "./components/Dashboard/Pharmacy/ProductRecive/ProductRecive";
import Stockout from "./components/Dashboard/Pharmacy/Stockout/Stockout";
// import AdminRoute from "./components/PrivateRoute/AdminRoute";
// import UserDashboard from "./components/Dashboard/UserDashboard/UserHome/UserDashboard";
import Appointment from "./components/Home/Appointment/Appointment";
import AppointmentHeader from "./components/Home/Appointment/AppointmentHeader";
import Home from "./components/Home/Home/Home";
import AdminLoginForm from "./components/Login/AdminLoginForm/AdminLoginForm";
import Login from "./components/Login/Login/Login";
import OnlineDoctor from "./components/OnlineDoctor/OnlineDoctor";
import Contact from "./components/Pages/Contact/Contact";
import FAQ from "./components/Pages/FAQ/FAQ";
import AboutHome from "./components/Pages/History/AboutHome/AboutHome";
import Review from "./components/Pages/review/Review";
import DoctorHeader from "./components/Pages/Team/DoctorHeader";
import Team from "./components/Pages/Team/Team";
import AdminRoute from "./components/PrivateRoute/AdminRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Service from "./components/Service/Service";
import Messenger from "./components/Share/Messenger/Messenger";
import PaymentForm from "./components/Share/Payment/PaymentForm/PaymentForm";
import Success from "./components/Share/Payment/Validation/Success";
import ScrollButton from "./components/Share/ScrollButton/ScrollButton";
import SingleDoctor from "./components/SingleDoctor/SingleDoctor";
import Audiologist from "./components/Specialization/Audiologist/Audiologist";
import Cardiologist from "./components/Specialization/Cardiologist/Cardiologist";
import ENTspecialist from "./components/Specialization/ENTspecialist/ENTspecialist";
import Neurologist from "./components/Specialization/Neurologist/Neurologist";
import Oncologist from "./components/Specialization/Oncologist/Oncologist";
import Psychiatrists from "./components/Specialization/Psychiatrists/Psychiatrists";

// import PaymentSuccess from "./components/Dashboard/Pharmacy/PaymentSuccess/PaymentSuccess";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  const user = useSelector((state) => state.auth.auth);
  const admin = useSelector((state) => state.admin.admin);

  return (
    <div>
      {loading ? (
        <Router>
          <Messenger />
          <ScrollButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/appointment" element={<AppointmentHeader />} />
              {/* <Route path="/userDashboard" element={<UserDashboard />}></Route> */}
              {/* <Route path="/userDashboard/appointment" element={<Appointment />}></Route> */}
              <Route path="/blog/:id" element={<SingleBlog />} />
            </Route>

            <Route path="/home" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/onlineDoctor" element={<OnlineDoctor />} />
            <Route path="/adminhome" element={<AdminHomeMain />} />
            <Route path="/paymentForm" element={<PaymentForm />} />
            <Route path="/success/:id" element={<Success />} />
            <Route path="/adminRegister" element={<CreateAdmin />} />
            <Route path="/adminLogin" element={<AdminLoginForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/team" element={<Team />} />
            <Route path="/review" element={<Review />} />
            {/* <Route path="/chat" element={<ChatPage />} /> */}
            <Route path="/doctor" element={<DoctorHeader />} />
            <Route path="/blogForm" element={<BlogForm />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/medicineCart" element={<Cart />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/about" element={<AboutHome />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleDoctor/:id" element={<SingleDoctor />} />

            <Route path="/team/:id" element={<SingleDoctor />} />
            <Route path="/specialization/oncologist" element={<Oncologist />} />
            <Route
              path="/specialization/neurologist"
              element={<Neurologist />}
            />
            <Route
              path="/specialization/ent-specialist"
              element={<ENTspecialist />}
            />
            <Route
              path="/specialization/cardiologist"
              element={<Cardiologist />}
            />
            <Route
              path="/specialization/audiologist"
              element={<Audiologist />}
            />
            <Route
              path="/specialization/psychiatrists"
              element={<Psychiatrists />}
            />

            {/* dashboard */}
            <Route path="/" element={<AdminRoute />}>
              <Route path="/dashboard" element={<DashboardMain />}>
                <Route
                  path="/dashboard"
                  element={
                    admin.role === admin ? <AdminHomeMain /> : <AllDoctors />
                  }
                ></Route>
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
                  path="/dashboard/appointedpatient"
                  element={<AppointedPatient />}
                />
                <Route
                  path="/dashboard/allNurse/update/:id"
                  element={<NurseProfileUpdate />}
                />
                {/* nurse route end */}
                {/* patients route start */}
                <Route
                  path="/dashboard/patientsInfo"
                  element={<PatientData />}
                />
                <Route
                  path="/dashboard/prescription/:id"
                  element={<PatientPrescription />}
                />
                <Route
                  path="/dashboard/patient/invoice"
                  element={<PatientInvoice />}
                />
                <Route
                  path="/dashboard/singlePatient/invoice/:id"
                  element={<SingleInvoice />}
                />
                <Route
                  path="/dashboard/patients/medicalTest/:id"
                  element={<MedicalTest />}
                />

                <Route path="/dashboard/pharmacy" element={<PharmacyHome />} />
                <Route path="/dashboard/order" element={<Order />} />
                <Route path="/dashboard/receive" element={<ProductRecive />} />
                <Route path="/dashboard/invoice" element={<Invoice />} />
                <Route
                  path="/dashboard/AddMedicine"
                  element={<AddMedicine />}
                />
                <Route path="/dashboard/Stockout" element={<Stockout />} />

                <Route
                  path="/dashboard/pdfInvoice/:id"
                  element={<PdfInvoice />}
                />
                {/* patients route end */}
                {/* blood bank admin start */}

                <Route
                  path="/dashboard/bloodBankAdmin"
                  element={<BloodAdminHome />}
                />
                <Route
                  path="/dashboard/manageAllDonors"
                  element={<ManageAllDonor />}
                />
                <Route
                  path="/dashboard/ManageBloodDonations"
                  element={<ManageBloodDonations />}
                />
                <Route
                  path="/dashboard/manageBloodRequests"
                  element={<ManageBloodRequests />}
                />
                {/* blood bank admin */}
              </Route>
            </Route>
            {/*  blood bank */}
            {/* <Route path="/bloodBank" element={<BloodDashboardMain />}>
              <Route path="/bloodBank" element={<BloodDashboardHome />}></Route>
              <Route path="/bloodBank/allDOnor" element={<AllDonors />}></Route>
              <Route
                path="/bloodBank/registerDonor"
                element={<RegisterDonor />}
              ></Route>
              <Route
                path="/bloodBank/bloodDonation"
                element={<BloodDonation />}
              ></Route>
              <Route
                path="/bloodBank/donationHistory"
                element={<BloodDonationHistory />}
              ></Route>
              <Route
                path="/bloodBank/bloodRequest"
                element={<BloodRequest />}
              ></Route>
            </Route> */}

            {/*  blood bank user dashboard*/}
            <Route exact element={<PrivateRoute />}>
              <Route path="/bloodBank" element={<BloodDashboardMain />}>
                <Route
                  path="/bloodBank"
                  element={<BloodDashboardHome />}
                ></Route>
                <Route
                  path="/bloodBank/allDonor"
                  element={<AllDonors />}
                ></Route>
                <Route
                  path="/bloodBank/registerDonor"
                  element={<RegisterDonor />}
                ></Route>
                <Route
                  path="/bloodBank/bloodDonation"
                  element={<BloodDonation />}
                ></Route>
                <Route
                  path="/bloodBank/donationHistory"
                  element={<BloodDonationHistory />}
                ></Route>
                <Route
                  path="/bloodBank/bloodRequest"
                  element={<BloodRequest />}
                ></Route>
                <Route
                  path="/bloodBank/requestHistory"
                  element={<BloodRequestHistory />}
                ></Route>
              </Route>
            </Route>
            {/* blood bank user dashboard*/}
          </Routes>
        </Router>
      ) : (
        <div className="loder-app">
          <HashLoader color="#f68685" size={150} />
        </div>
      )}
    </div>
  );
}

export default App;
