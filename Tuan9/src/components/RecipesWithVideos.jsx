import RecipeCard from './RecipeCard'

const videoRecipes = [
  {
    image: '/Lab_02_b/Salad with cabbage.png',
    title: 'Salad with cabbage and shrimp',
    time: '40 mins',
  },
  {
    image: '/Lab_02_b/Bean, shrimp, and potato salad.png',
    title: 'Salad of cove beans, shrimp and potatoes',
    time: '40 mins',
  },
  {
    image: '/Lab_02_b/Sunny-side up fried eggs.png',
    title: 'Sunny-side up fried egg',
    time: '70 mins',
  },
  {
    image: '/Lab_02_b/Lotus delight salad_01.png',
    title: 'Lotus delight salad',
    time: '30 mins',
  },
]

export default function RecipesWithVideos() {
  return (
    <section className="py-14 px-8 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-pink-500 mb-2">Recipes With Videos</h2>
        <p className="text-sm text-gray-500">Cooking up Culinary Creations with Step-by-Step Videos.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {videoRecipes.map((recipe, i) => (
          <RecipeCard key={i} {...recipe} />
        ))}
      </div>
    </section>
  )
}
