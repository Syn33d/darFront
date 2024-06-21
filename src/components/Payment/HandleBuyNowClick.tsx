import axios from 'axios';

const handleBuyNowClick = async () => {
    try {
      const paymentMethod = 'pm_card_visa'; // Replace with the appropriate payment method
      const successUrl = window.location.origin; // Replace '/success' with the route of your choice
      const cancelUrl = window.location.origin; // Replace '/checkout' with the route of your choice
      const idMagazine = "price_1PJMkzG3h0hR2My9pBf1gDTh"; // For now, assuming the magazine id is the price id

      // Envoie une requête pour créer une session de paiement unique
      const response = await axios.post('https://api.dar-site.com/stripe/purchase', {
        paymentMethod,
        idMagazine,
        successUrl,
        cancelUrl,
      });

      const { success, session } = response.data;
      if (success && session.url) {
        window.location.href = session.url; 
      } else {
        alert('Failed to create session');
      }
    } catch (error) {
      console.error('Error creating one-time purchase session:', error);
      alert('An error occurred during the purchase process.');
    }
  };

export default handleBuyNowClick;