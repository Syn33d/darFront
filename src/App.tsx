import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Authentification from "./components/Authentification/Authentification.tsx";
import PasswordReset from "./components/Authentification/passwordReset.tsx";
import PricingPage from "./components/Payment/PricingPage.tsx";
import SinglePayment from "./components/Payment/SinglePayment.tsx";
import Account from "./components/Account/MyAccount.tsx";
import Homepage from "./components/HomePage/HomePage.tsx";
import Magazine from "./components/Magazine/Magazine.tsx";
import Contact from "./components/Contact/Contact.tsx";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Authentification" element={<Authentification />} />
        <Route path="/Forgot" element={<PasswordReset />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/Payment" element={<SinglePayment />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Magazine" element={<Magazine />} />
      </Routes>
    </Router>
  );
}

export default App;