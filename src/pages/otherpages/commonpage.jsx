import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

const TirthankaraDetailPage = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const { id } = useParams(); // Extract the Tirthankara ID from the URL

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  // Tirthankara details with full information
  const tirthankaraDetails = {
    2: {
      name: '24-TIRTHANKAR NAME',
      sanskrit: '२४ तीर्थंकर नाम',
      content: [
        "Here is the list of the 24 Tirthankaras:",
        "",
        "1. SHREE RISHABHADEV (ADINATH): श्री ऋषभदेव (आदिनाथ) – Bull/Ox (वृषभ)",
        "2. SHREE AJIT NATHJI: श्री अजीतनाथजी – Elephant (हाथी)",
        "3. SHREE SAMBHAV NATHJI: श्री संभवनाथजी – Horse (घोड़ा)",
        "4. SHREE ABHINANDAN NATHJI: श्री अभिनंदननाथजी – Monkey (वानर)",
        "5. SHREE SUMTI NATHJI: श्री सुमतिनाथजी – Chakwa (चक्रवाक)",
        "6. SHREE PADMA PRABHUJI: श्री पद्मप्रभुजी – Lotus (कमल)",
        "7. SHREE SUPARSHVA NATHJI: श्री सुपार्श्वनाथजी – Swastika (स्वस्तिक)",
        "8. SHREE CHANDRA PRAJBHUJI: श्री चंद्रप्रभुजी – Crescent Moon (अर्धचंद्र)",
        "9. SHREE PUSHPADANT NATHJI: श्री पुष्पदंतनाथजी – Crocodile (मगरमच्छ)",
        "10. SHREE SHITAL NATHJI: श्री शीतलनाथजी – Kalp Vraksha (कल्पवृक्ष)",
        "11. SHREE SHREYANSH NATHJI: श्री श्रेयान्सनाथजी – Rhinoceros (गैंड)",
        "12. SHREE VASUPUJYA NATHJI: श्री वासुपूज्यनाथजी – Buffalo (भैंस)",
        "13. SHREE VIMAL NATHJI: श्री विमलनाथजी – Boar (सुअर)",
        "14. SHREE ANANT NATHJI: श्री अनंतनाथजी – Porcupine (कांटेदार कुत्ता)",
        "15. SHREE DHARM NATHJI: श्री धर्मनाथजी – Vajra/Thunderbolt (वज्र)",
        "16. SHREE SHANTI NATHJI: श्री शान्तिनाथजी – Deer (मृग)",
        "17. SHREE KUNTU NATHJI: श्री कुंथुनाथजी – Goat (बकरी)",
        "18. SHREE ARAH NATHJI: श्री अरनाथजी – Fish (मछली)",
        "19. SHREE MALLI NATHJI: श्री मल्लिनाथजी – Kalasha (कलश)",
        "20. SHREE MUNI SUVRAT NATHJI: श्री मुनिसुव्रतनाथजी – Tortoise (कछुआ)",
        "21. SHREE NAMI NATHJI: श्री नमिनाथजी – Blue Lotus (नीला कमल)",
        "22. SHREE NEMI NATHJI: श्री नेमिनाथजी – Shankha/Conch (शंख)",
        "23. SHREE PARSHWA NATHJI: श्री पार्श्वनाथजी – Serpent Snake (नाग)",
        "24. SHREE MAHAVIR SWAMIJI: श्री महावीर स्वामीजी – Lion (सिंह)",
        "",
      ].join('\n')
  },
    4: {
      name: 'Contact Us',
      sanskrit: 'संपर्क करें',
      content: [
        "Developed by: Siddhant Vishalkumar Sankesara",
        "",
        "We are here to assist you with any questions or concerns you may have.",
        "",
        "If you find any mistakes in the content or if any words are misspelled, please let us know, and we apologize for any errors.",
        "",
        "If you have suggestions for additional content or if you encounter any bugs, please inform us, and we will address them promptly.",

        "Please fill out this form for more information:",
        "",
        " <a href='https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__oUgNH5UN01GSkhRR1lFU1pGRjc4VkswUzJQSElEVS4u' target='_blank' rel='noopener noreferrer'>=> Click here to fill the form</a>",
      
        "",
        "You can reach us through the following methods:",
        "",

        "=> Email: jaindigitalplatform@gmail.com",
        "=> Instagram: @Siddhant._.4357",
        "",
       
        "",
        "Thank you for your interest in our services."
      ].join('\n')
    }
    // Add other details as needed
  };

  const tirthankara = tirthankaraDetails[id] || { name: 'Unknown', sanskrit: '', content: [] };

  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));

  const formatContent = (content) => {
    return content.split('\n').map((line, index) => {
      const sanitizedLine = DOMPurify.sanitize(line);
      return <p key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: sanitizedLine }} />;
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-orange-50 relative">
      {/* Header */}
      <header className="bg-orange-100 p-4 shadow-lg rounded-lg shadow-gray-500">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            className="text-orange-500 hover:text-orange-700 transition-colors"
            onClick={handleBackClick}
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-800">अन्य</h1>
          <div className="flex-none w-12 h-12"></div>
        </div>
      </header>

      <main className="flex-grow p-4 overflow-y-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl shadow-gray-400 p-6">
          <h2 className="text-3xl font-semibold text-orange-800 mb-4">{tirthankara.sanskrit}</h2>
          <div
            className="prose prose-orange max-w-none"
            style={{ fontSize: `${zoomLevel}em` }}
          >
            {formatContent(tirthankara.content)}
          </div>
        </div>
      </main>

      {/* Zoom Controls */}
      <div className="absolute bottom-16 right-1 flex items-center bg-white rounded-md shadow-lg border border-rounded">
        <button
          onClick={handleZoomOut}
          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-300 rounded-md transition-colors"
          aria-label="Zoom Out"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
          </svg>
        </button>
        <div className="w-px h-6 bg-gray-400"></div>
        <button
          onClick={handleZoomIn}
          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-300 rounded-md transition-colors"
          aria-label="Zoom In"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
          </svg>
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-orange-100 p-4 shadow-md shadow-gray-300">
        <div className="max-w-4xl mx-auto text-center text-orange-800">
        Copyright © 2024 JDP. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default TirthankaraDetailPage;
