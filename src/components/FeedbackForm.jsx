import { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    rating: 5,
    comment: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value, 10) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback soumis:', feedback);
    // Ici, vous pourriez ajouter l'appel à une API pour enregistrer le feedback
    setIsSubmitted(true);
    
    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
      setFeedback({ rating: 5, comment: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Votre avis nous intéresse</h2>
      
      {isSubmitted ? (
        <div className="p-4 bg-green-100 text-green-700 rounded-md text-center">
          Merci pour votre retour ! Votre avis a bien été enregistré.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
              Note : <span className="font-bold">{feedback.rating}/10</span>
            </label>
            <div className="relative pt-1">
              <input
                type="range"
                id="rating"
                name="rating"
                min="0"
                max="10"
                step="1"
                value={feedback.rating}
                onChange={handleChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0</span>
                <span>10</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
              Votre commentaire
            </label>
            <textarea
              id="comment"
              name="comment"
              value={feedback.comment}
              onChange={handleChange}
              placeholder="Dites-nous ce que vous avez pensé de votre expérience..."
              rows="4"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2 border"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out transform hover:-translate-y-0.5"
          >
            Envoyer mon avis
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
