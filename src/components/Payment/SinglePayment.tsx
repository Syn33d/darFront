import axios from 'axios';

// Liste des produits disponibles à l'achat (pour le moment on simule les produits, pour la V1 il faudrait faire une recherche dans l'Api à partir de l'id du magazine)
const products = [
    { id: 1, name: 'Magazine 1', priceId: 'price_1', description: 'Description 1' },
    { id: 2, name: 'Magazine 2', priceId: 'price_2', description: 'Description 2' },
    // Ajout d'autres produits ici
];

// Composant pour gérer les achats uniques
function SinglePayment() {

    // Fonction pour gérer l'achat d'un produit
    const handlePurchase = async (productId: number) => {
        try {
            const paymentMethod = 'pm_card_visa'; 
            const successUrl = window.location.origin ; 
            const cancelUrl = window.location.origin ; 

            //Envoyer une requête pour créer une session de paiement unique
            const response = await axios.post('https://api.dar-site.com/stripe/purchase', {
                paymentMethod,
                idMagazine: productId,
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
