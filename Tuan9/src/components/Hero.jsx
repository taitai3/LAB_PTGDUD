export default function Hero() {
  return (
    <section className="relative w-full h-[480px] overflow-hidden">
      {/* Hero background image */}
      <img
        src="/Lab_01/Image 72.png"
        alt="Hero"
        className="w-full h-full object-cover object-center"
      />

      {/* Overlay card */}
      <div className="absolute bottom-10 left-10 bg-white rounded-2xl shadow-xl p-5 w-64">
        {/* Badge */}
        <span className="inline-block bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Recipe of the day
        </span>

        <h3 className="text-base font-bold text-gray-800 mb-1">Salad Caprese</h3>
        <p className="text-xs text-gray-500 mb-3 leading-relaxed">
          Classic Italian Salad Caprese use tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar creates a refreshing dish for summer appetizer.
        </p>

        {/* Author */}
        <div className="flex items-center gap-2 mb-3">
          <img src="/Lab_02_b/avatar_small.png" alt="Author" className="w-7 h-7 rounded-full object-cover" />
          <span className="text-xs text-gray-600 font-medium">Salad Caprese</span>
        </div>

        {/* Button */}
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold py-2 rounded-full transition-colors">
          View now →
        </button>
      </div>
    </section>
  )
}
