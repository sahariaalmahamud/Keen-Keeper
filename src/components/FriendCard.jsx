import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {
  if (!friend) return null;

  const statusColors = {
    'on-track': 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'almost due': 'bg-amber-100 text-amber-700 border-amber-200',
    'overdue': 'bg-rose-100 text-rose-700 border-rose-200',
  };

  return (

    <Link to={`/friend/${friend.id}`} className="block h-full group">
      <div className="bg-white p-6 rounded-2xl border border-gray-300 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all h-full flex flex-col items-center text-center">

        <div className="mb-4">
          <img
            src={friend?.picture || 'https://via.placeholder.com/150'}
            alt={friend?.name || 'Friend'}
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm group-hover:scale-105 transition-transform"
          />
        </div>

        <h3 className="text-lg font-bold text-slate-800 leading-tight">{friend?.name || 'Unknown'}</h3>
        <p className="font-semibold text-slate-700 mb-1">{friend?.days_since_contact ?? 0}d ago</p>


        <div className="flex flex-wrap justify-center gap-1 mb-4 flex-grow">
          {friend?.tags?.map((tag, index) => (
            <span key={index} className="flex items-center gap-1 text-[10px] bg-slate-50 text-slate-500 px-2 py-0.5 rounded border border-slate-100">
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border mb-4 ${statusColors[friend?.status] || 'bg-gray-100 text-gray-600'}`}>
          {friend?.status || 'N/A'}
        </div>


      </div>
    </Link>
  );
};

export default FriendCard;

