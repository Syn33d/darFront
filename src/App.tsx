import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Authentification from "./components/Authentification/Authentification.tsx";
import PasswordReset from "./components/Authentification/PasswordReset.tsx";
import PricingPage from "./components/Payment/PricingPage.tsx";
import Account from "./components/Account/MyAccount.tsx";
import Homepage from "./components/HomePage/HomePage.tsx";
import Magazine from "./components/Magazine/Magazine.tsx";
import ArticleFree from "./components/Magazine/ArticleFree.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Presentation from "./components/Presentation/Presentation.tsx";
import { loadStripe } from '@stripe/stripe-js';


loadStripe('pk_live_51PFyI9G3h0hR2My98cpysUelbjSwFFXf6Td14iADtumZlDXTClojCtvekZ3BjSM3vlfmVGH43KfgdD1MtK3s3c3a00bRIIuK5B');

function App() {

  return (
    // Router pour gérer la navigation entre les différentes pages
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Authentification" element={<Authentification />} />
        <Route path="/Forgot" element={<PasswordReset />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Magazine" element={<Magazine />} />
        <Route path="/ArticleFree" element={<ArticleFree />} />
        <Route path="/Presentation" element={<Presentation />} />
      </Routes>
    </Router>
  );
}

export default App;