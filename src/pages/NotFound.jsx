import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Search, Compass } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col font-sans overflow-hidden">
      <Navbar />

      <main className="grow flex items-center justify-center px-6 py-20 relative">
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-2xl w-full text-center relative z-10">
          
          <div className="relative mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="">
                
                <h1 className="text-[10rem] font-black bg-linear-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent leading-none select-none animate-pulse">
                  404
                </h1>
              </div>
            </div>

            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
              <div className="animate-bounce delay-100">
                <Compass className="w-12 h-12 text-slate-400/50" />
              </div>
            </div>
          </div>

          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-linear-to-r from-red-100 to-orange-100 p-4 rounded-full">
                <Search className="w-12 h-12 text-red-500" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Oops! Page Not Found
            </h2>

            <p className="text-slate-600 mb-2 text-lg leading-relaxed">
              Looks like you've ventured into uncharted territory!
            </p>
            <p className="text-slate-500 mb-8 text-sm leading-relaxed">
              The page you're looking for might have been moved, deleted, or never existed in the first place.
            </p>

            
            <div className="flex items-center justify-center">
              <button
                onClick={() => navigate('/')}
                className="group flex items-center gap-3 px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-bold text-sm hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 w-full sm:w-auto justify-center transform hover:-translate-y-1"
              >
                <Home size={18} className="group-hover:scale-110 transition-transform" />
                Back to Home
              </button>

  
            </div>

           
            <div className="mt-8 p-4 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-700 font-medium">
                <strong>Pro tip:</strong> Try checking the URL for typos or use the navigation menu above!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;