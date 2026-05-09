export default function RecipeCard({ image, title, time, bookmarked = false }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative rounded-xl overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow hover:bg-pink-50 transition-colors">
          <svg className={`w-4 h-4 ${bookmarked ? 'text-pink-500 fill-pink-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>
      <h4 className="text-sm font-semibold text-gray-800 leading-tight">{title}</h4>
      <div className="flex items-center gap-1 text-xs text-gray-400">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{time}</span>
      </div>
    </div>
  )
}
