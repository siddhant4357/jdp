import React, {useState} from 'react';
import { ChevronLeft, Scroll, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const tirthankaras = [
  { id: 1, name: 'FULO KA TAROH KA SABKA KEHNA HAI', sanskrit: 'फूलो का तारो का सबका कहना है' },
  { id: 2, name: 'MERI JHOPDI KE BHAG AAJ KHUL JAYENGE', sanskrit: 'मेरी झोपड़ी के भाग आज खुल जायेंगे' },
  { id: 3, name: 'VHALA ADINATH ME TO...', sanskrit: 'व्हाला आदिनाथ में तो...' },
  { id: 4, name: 'TUM SE LAGI LAGAN', sanskrit: 'तुम से लागी लगन' },
  { id: 5, name: 'MERE SAR PAR RAKH DO...', sanskrit: 'मेरे सर पर रख दो...' },
  { id: 6, name: 'BHAGWAN MERI NAIYA', sanskrit: 'भगवान मेरी नैया' },
  { id: 7, name: 'O GURU SA THARO CHELO BANU MEIN', sanskrit: 'ओ गुरु सा थोरो चेलो बनु में' },
  { id: 8, name: 'HAR JANAM ME DADA TERA SATH CHAHIYE', sanskrit: 'हर जनम में दादा तेरा साथ चाहिए' },
  { id: 9, name: 'TU MANE BHAGWAN', sanskrit: 'तू मने भगवान' }
];



const MeditationSVG = () => (
  <svg viewBox="0 0 119.683 119.683" className="w-12 h-12" fill="currentColor" > <g> <circle cx="59.058" cy="18.729" r="18.729"></circle> <path d="M103.871,101.242c-0.698-5.748-4.909-7.937-12.004-9.021c-4.976,4.548-13.326,8.022-27.24,8.022 c-1.926,0-3.786-0.489-5.454-1.426c-1.668,0.937-3.528,1.426-5.456,1.426c-13.785,0-22.109-3.412-27.1-7.898 c-6.38,1.253-10.152,3.544-10.806,8.896c-0.416,3.445,0.659,6.824,3.029,9.518c6.678,7.592,24.951,8.85,35.247,8.923 c0.021,0,0.043,0,0.063,0c2.184,0,4.173-0.821,5.69-2.168c1.516,1.347,3.506,2.168,5.689,2.168c0.021,0,0.042,0,0.063,0 c10.297-0.073,28.57-1.331,35.25-8.925C103.215,108.066,104.287,104.688,103.871,101.242z"></path> <path d="M54.024,97.725c2.176,0,4.122-0.961,5.455-2.476c1.333,1.515,3.28,2.476,5.454,2.476c20.907,0,27.621-8.242,29.574-15.16 c4.568-16.186-13.771-35.102-22.188-40.263c-0.564-0.348-1.166-0.578-1.776-0.755c-2.085-1.393-4.43-2.418-6.817-3.004 l-4.667,4.697l-4.526-4.749c-0.014,0.004-0.029,0.005-0.045,0.01c-3.072,0.734-6.065,2.2-8.541,4.242 c-8.681,5.72-25.944,24.063-21.498,39.822C26.402,89.482,33.117,97.725,54.024,97.725z M39.889,71.49v6.197 c0.489,0.223,1.511,0.877,1.519,0.948c0.854,0.621,4.245,1.954,11.81,1.954c1.928,0,3.788,0.488,5.456,1.425 c1.668-0.937,3.528-1.425,5.454-1.425c6.296,0,9.693-0.922,11.153-1.591c0.986-0.202,1.972-0.451,2.947-0.73v-8.436 c1.878,3.455,2.876,6.679,2.281,8.782c-0.793,2.815-6.763,4.565-15.577,4.565c-2.174,0-4.12,0.96-5.454,2.476 c-1.333-1.516-3.279-2.476-5.455-2.476c-8.813,0-14.784-1.75-15.577-4.565C37.95,76.854,38.57,74.304,39.889,71.49z"></path> </g> </svg>
);

const VartmanChaubisi = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleBackClick = () => {
    navigate('/fourthpage');
  };

  const handleTirthankaraClick = (id) => {
    navigate(`/bhajan/${id}`);
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredTirthankaras = tirthankaras.filter((tirthankara) =>
    tirthankara.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tirthankara.sanskrit.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="w-screen h-screen bg-gray-100 p-4 flex flex-col">
      <header className="my-2 bg-orange-200 p-6 rounded-b-3xl shadow-lg relative flex items-center justify-between">
        <button
          className="text-orange-600 hover:text-orange-800 transition-colors"
          onClick={handleBackClick}
        >
          <ChevronLeft size={36} />
        </button>
        <div className="flex-1 flex items-center space-x-4 pl-2">
          <Scroll className="text-orange-600" size={27} />
          <h2 className="text-lg+ md:text-2xl lg:text-3xl font-bold text-orange-700">
          भजन-भक्ति 
          </h2>
        </div>
        <div className="w-14 h-14"></div>
      </header>
      
      <div className="my-4 relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      <main className="flex-1 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-orange-600 scrollbar-track-gray-200">
        {filteredTirthankaras.length > 0 ? (
          filteredTirthankaras.map((tirthankara) => (
            <div
              key={tirthankara.id}
              className="bg-white p-4 rounded-lg shadow-lg mb-4 flex items-center cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={() => handleTirthankaraClick(tirthankara.id)}
            >
              <div className="mr-4 text-orange-600">
                <MeditationSVG />
              </div>
              <div>
                <h3 className="font-semibold text-blue-700">{tirthankara.sanskrit}</h3>
                <p className="text-gray-700">{tirthankara.name}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600 mt-8">
            No results were found for your search.
          </div>
        )}
      </main>
    </div>
  );
};

export default VartmanChaubisi;
