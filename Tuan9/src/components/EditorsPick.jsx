const picks = [
  {
    image: '/Lab_03/italian_style_tomato_salad.png',
    title: 'Stuffed sticky rice ball',
    category: 'Salad',
    author: 'Jennifer King',
    avatar: '/Lab_02_b/avatar_small.png',
    description: "It's sticky rice balls. A delightful Asian meal with chewy, glutinous rice and a flavorful surprise filling.",
  },
  {
    image: '/Lab_03/lotus_delight_salad.png',
    title: 'Strawberry smoothie',
    category: 'Smoothie',
    author: 'Matthew Martinez',
    avatar: '/Lab_02_b/avatar.png',
    description: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...',
  },
  {
    image: '/Lab_03/avacador_salad.png',
    title: 'Latte Art',
    category: 'Coffee',
    author: 'Sarah Hill',
    avatar: '/Lab_02_b/avatar_small.png',
    description: 'Latte art is the skillful art of creating captivating designs on the surface of a latte...',
  },
  {
    image: '/Lab_03/salad_with_cabbage_and_shrimp.png',
    title: 'Butter fried noodles',
    category: 'Noodles',
    author: 'Julia Lopez',
    avatar: '/Lab_02_b/avatar.png',
    description: 'Butter fried noodles. Savory noodles cooked in butter for a delicious and satisfying meal...',
  },
]

export default function EditorsPick() {
  return (
    <section className="py-14 px-8 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-pink-500 mb-2">Editor's pick</h2>
        <p className="text-sm text-gray-500">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {picks.map((pick, i) => (
          <div key={i} className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <img
              src={pick.image}
              alt={pick.title}
              className="w-28 h-28 rounded-xl object-cover flex-shrink-0"
            />
            <div className="flex flex-col justify-between flex-1 min-w-0">
              <div>
                <span className="text-xs text-pink-400 font-medium">{pick.category}</span>
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-bold text-gray-800 leading-tight mt-0.5">{pick.title}</h4>
                  <button className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 hover:bg-pink-50 transition-colors">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-1.5 mt-1 mb-2">
                  <img src={pick.avatar} alt={pick.author} className="w-5 h-5 rounded-full object-cover" />
                  <span className="text-xs text-gray-500">{pick.author}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{pick.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
