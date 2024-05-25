import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./components/Contact/Contact.tsx";
import Authentification from "./components/Authentification/Authentification.tsx";
import PasswordReset from "./components/Authentification/passwordReset.tsx";
import { loadStripe } from '@stripe/stripe-js';
import PricingPage from "./components/Payment/PricingPage.tsx";
import SinglePayment from "./components/Payment/SinglePayment.tsx";
import Account from "./components/Account/MyAccount.tsx";

const stripePromise = loadStripe('pk_test_51PFyI9G3h0hR2My9h8ZsEzw0f1NvSOBI1qz6yewT8jODUM4llCo0aZzXTwrwYzhfOkDYJ8hrSd6zlGiukOeabJAp00DzCbFHmb');

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Authentification" element={<Authentification />} />
        <Route path="/Forgot" element={<PasswordReset />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/Payment" element={<SinglePayment />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;