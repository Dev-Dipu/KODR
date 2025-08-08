// ✅ Enhanced VideoCard component (modern dark UI + avatar + hover effect)

import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <Link
      to={`/video/${video.id}`}
      className="w-full sm:w-[320px] transition-transform hover:scale-[1.03]"
    >
      {/* 🎞 Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-zinc-800">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
          {video.duration}
        </span>
      </div>

      {/* 📋 Info */}
      <div className="mt-3 flex items-start gap-3">
        {/* Optional Avatar */}
        <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold">
          {video.author[0]}
        </div>

        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-white line-clamp-2">
            {video.title}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">{video.author}</p>
          <p className="text-xs text-gray-500">{video.views} views</p>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;