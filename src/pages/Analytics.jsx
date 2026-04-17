import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Analytics = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      const savedData = JSON.parse(localStorage.getItem('global_timeline')) || [];
      const counts = savedData.reduce((acc, curr) => {
        acc[curr.type] = (acc[curr.type] || 0) + 1;
        return acc;
      }, {});

      const formattedData = Object.keys(counts).map(key => ({
        name: key,
        value: counts[key]
      }));

      setChartData(formattedData);
      setLoading(false);
    }, 300); // Brief loading delay for smooth UX

    return () => clearTimeout(timer);
  }, []);

  
  const COLORS = {
    'Call': '#1a4731',   
    'Text': '#7c3aed',   
    'Video': '#10b981',  
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <Navbar />
      
      <main className="grow max-w-5xl mx-auto w-full px-6 py-12">
   
        <h1 className="text-4xl font-black text-[#1a2e2a] mb-12 tracking-tight">
          Friendship Analytics
        </h1>
        
        <div className="bg-white p-6 md:p-10 rounded-2xl border-none shadow-sm min-h-112.5 flex flex-col">
          <h3 className="text-slate-400 font-bold text-sm uppercase tracking-[0.2em] mb-8">
            By Interaction Type
          </h3>
          
          <div className="grow flex items-center justify-center">
            {loading ? (
              <div className="flex flex-col justify-center items-center py-32 transition-opacity duration-500 opacity-100">
                <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-emerald-800 border-t-emerald-800/10 border-b-emerald-800/10 border-l-emerald-800"></div>
                <p className="mt-6 text-slate-400 font-bold animate-pulse tracking-wide text-sm">Analyzing your interactions...</p>
              </div>
            ) : chartData.length > 0 ? (
              <div className="w-full h-87.5 md:h-105 lg:h-117.5">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius="40%"
                      outerRadius="60%"
                      paddingAngle={4}
                      dataKey="value"
                      stroke="none"
                    >
                      {chartData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={COLORS[entry.name] || '#cbd5e1'} 
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend 
                      verticalAlign="bottom" 
                      height={36}
                      iconType="circle"
                      formatter={(value) => (
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">
                          {value}
                        </span>
                      )}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200 w-full">
                <p className="text-slate-400 font-bold italic tracking-wide">
                  No interaction data recorded yet. <br />
                  <span className="text-xs font-medium not-italic">Go to a profile and log a Call, Text, or Video.</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Analytics;


