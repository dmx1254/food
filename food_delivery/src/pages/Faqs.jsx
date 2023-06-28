import React from "react";
import headAbout from "../assets/other/contact.png";

const Faqs = () => {
  const faqData = [
    {
      question: "Quels sont les modes de paiement acceptés ?",
      answer:
        "Nous acceptons les paiements par carte de crédit, carte de débit et PayPal.",
    },
    {
      question: "Quelle est la politique de retour de produits ?",
      answer:
        "Nous acceptons les retours dans les 30 jours suivant l'achat. Veuillez consulter notre page de politique de retour pour plus de détails.",
    },
    {
      question: "Combien de temps faut-il pour que ma commande soit livrée ?",
      answer:
        "Le délai de livraison varie en fonction de votre emplacement. En général, les commandes sont livrées dans un délai de 3 à 7 jours ouvrables.",
    },
    // Ajoutez d'autres questions et réponses ici
  ];

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex relative w-full">
        <img
          src={headAbout}
          alt="contact"
          className="w-full h-[400px] bg-cover bg-center bg-no-repeat"
        />
        <span className=" text-6xl font-bold text-[#00c893] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
          Faq
        </span>
      </div>
      <div className="flex flex-col items-start justify-center mx-auto px-12 my-12 gap-8">
        <h1 className="text-3xl font-bold mb-6">Foire aux questions</h1>
        <div className="grid gap-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow-md border border-gray-200"
            >
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
