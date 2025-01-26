import React, { useState } from 'react';

const LingoBoard = () => {
  const [selectedTerm, setSelectedTerm] = useState(null);

  const lingoTerms = [
    { 
      term: "Mehfil", 
      meaning: "Meet", 
      color: "bg-slate-800 text-slate-200 hover:bg-slate-700" 
    },
    { 
      term: "Chod padhana", 
      meaning: "Doesn't do own work, dumps on others", 
      color: "bg-zinc-900 text-zinc-300 hover:bg-zinc-800" 
    },
    { 
      term: "Canva Pro Max", 
      meaning: "Good poster", 
      color: "bg-gray-900 text-gray-300 hover:bg-gray-800" 
    },
    { 
      term: "SAARC", 
      meaning: "SAA remote control: VP of SAA (Tharak)", 
      color: "bg-neutral-900 text-neutral-300 hover:bg-neutral-800" 
    },
    { 
      term: "Taalibani", 
      meaning: "Unnecessary restrictions", 
      color: "bg-stone-900 text-stone-300 hover:bg-stone-800" 
    },
    { 
      term: "Triple C", 
      meaning: "Chai, Coffee, Caffeine", 
      color: "bg-emerald-900 text-emerald-300 hover:bg-emerald-800" 
    },
    { 
      term: "Baba G", 
      meaning: "Basically Andrew Tate-like behavior", 
      color: "bg-cyan-900 text-cyan-300 hover:bg-cyan-800" 
    },
    { 
      term: "Deja Poo", 
      meaning: "Heard this crap before", 
      color: "bg-indigo-900 text-indigo-300 hover:bg-indigo-800" 
    },
    { 
      term: "Khusvendra", 
      meaning: "Chutiya", 
      color: "bg-violet-900 text-violet-300 hover:bg-violet-800" 
    }
  ];

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl text-center mb-6 font-roboto">
          Alpha Squadron 🚀 Lingo Board
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {lingoTerms.map((item, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg shadow-md cursor-pointer transition-all ${item.color} relative`}
              onClick={() => setSelectedTerm(item)}
            >
              <h2 className="font-bold text-xl text-slate-350">{item.term}</h2>
              <span 
                className="absolute top-2 right-2 text-gray-600 text-sm"
                title="More Info"
              >
                ℹ️
              </span>
            </div>
          ))}
        </div>

        {selectedTerm && (
          <div className="fixed inset-0 bg-[#181e24] bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#181e24] p-6 rounded-xl shadow-2xl max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4 text-white">{selectedTerm.term}</h2>
              <p className="text-white">{selectedTerm.meaning}</p>
              <button 
                onClick={() => setSelectedTerm(null)}
                className="mt-4 w-full bg-slate-600 text-white py-2 rounded-lg hover:bg-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LingoBoard;