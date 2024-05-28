import axios from 'axios';

const products = [
    { id: 1, name: 'Magazine 1', priceId: 'price_1', description: 'Description 1' },
    { id: 2, name: 'Magazine 2', priceId: 'price_2', description: 'Description 2' },
    // Ajoutez d'autres produits ici
];

function SinglePayment() {
    const handlePurchase = async (productId: number) => {
        try {
            const paymentMethod = 'pm_card_visa'; // Remplacez par la méthode de paiement appropriée
            const successUrl = window.location.origin ; // Remplacez '/success' par la route de votre choix
            const cancelUrl = window.location.origin ; // Remplacez '/checkout' par la route de votre choix


            const response = await axios.post('http://localhost:3000/stripe/purchase', {
                paymentMethod,
                idMagazine: productId,
                successUrl,
                cancelUrl,
            });

            const { success, session } = response.data;
            if (success && session.url) {
                window.location.href = session.url; // Redirige l'utilisateur vers l'URL de la session de checkout
            } else {
                alert('Failed to create session');
            }
        } catch (error) {
            console.error('Error creating one-time purchase session:', error);
            alert('An error occurred during the purchase process.');
        }
    };

    return (
        <div>
            <h2>Product List</h2>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <button onClick={() => handlePurchase(product.id)}>Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SinglePayment;