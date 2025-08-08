// ✅ Enhanced Player component (dark UI + thumbnail fallback + polished iframe features)

import { useParams } from 'react-router-dom';
import VideoJson from '../data/videos.json';
import { ThumbsUp, ThumbsDown, PlayIcon } from 'lucide-react';
import { useState } from 'react';

const Player = () => {
  const { id } = useParams();
  const video = VideoJson.find((video) => video.id === id);

  const [isPlaying, setIsPlaying] = useState(false);

  if (!video) return <div className="p-4 text-center text-white">Video not found</div>;

  const comments = video.comments || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 text-white">
      {/* 📽️ Video */}
      <div className="w-full aspect-video rounded-xl overflow-hidden bg-black relative">
        {!isPlaying && (
          <div
            className="absolute inset-0 bg-black flex items-center justify-center cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover opacity-50" />
            <div className="absolute text-white bg-red-600 opacity-80 hover:opacity-60 px-4 py-2 rounded-full h-16 flex items-center justify-center aspect-square text-sm font-semibold">
              <PlayIcon />
            </div>
          </div>
        )}

        {isPlaying && (
          <iframe
            className="w-full h-full"
            src={video.videoUrl + '?autoplay=1&rel=0&modestbranding=1&controls=1'}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      {/* 🎯 Title + Stats */}
      <div className="mt-4">
        <h1 className="text-xl sm:text-2xl font-bold text-white">{video.title}</h1>
        <p className="text-sm text-gray-400 mt-1">
          {video.views} views • {video.uploadTime}{" "}
          {video.isLive && (
            <span className="ml-2 px-2 py-0.5 bg-red-600 text-white text-xs rounded">LIVE</span>
          )}
        </p>
      </div>

      {/* 👤 Channel Info + Like/Dislike */}
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white text-sm font-bold">
            {video.author[0]}
          </div>
          <div>
            <p className="font-semibold">{video.author}</p>
            <p className="text-xs text-gray-400">{video.subscriber}</p>
          </div>
          <button className="ml-4 bg-white text-black text-sm px-4 py-1.5 rounded-full font-semibold hover:bg-gray-300">
            Subscribe
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-sm px-3 py-1 rounded-full">
            <ThumbsUp size={16} /> Like
          </button>
          <button className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-sm px-3 py-1 rounded-full">
            <ThumbsDown size={16} /> Dislike
          </button>
        </div>
      </div>

      {/* 📝 Description */}
      <div className="mt-6 bg-zinc-800 p-4 rounded-md text-sm text-gray-300 leading-relaxed whitespace-pre-line">
        {video.description}
      </div>

      {/* 💬 Comment Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Comments</h2>
        <div className="space-y-4">
          {comments.map((c, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                {c.name[0]}
              </div>
              <div className="bg-zinc-800 rounded-md px-3 py-2 w-full">
                <p className="text-sm font-semibold text-white">{c.name}</p>
                <p className="text-sm text-gray-300">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Player;