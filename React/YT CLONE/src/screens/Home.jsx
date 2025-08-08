// ✅ Refined Home.jsx — responsive YouTube-style layout with Lucide icon + UI matching Player

import { Tv } from 'lucide-react';
import VideoJson from '../data/videos.json';
import VideoCard from '../components/VideoCard';

const Home = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-6">
      {/* 🔥 Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Tv size={28} className="text-red-500" />
          <h1 className="text-xl sm:text-2xl font-bold">Streamify</h1>
        </div>
        <h2 className='text-zinc-700'>Developer Dipu</h2>

      </div>

      {/* 🎥 Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {VideoJson.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;