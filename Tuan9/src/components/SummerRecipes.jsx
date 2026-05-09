import RecipeCard from './RecipeCard'

const recipes = [
  {
    image: '/Lab_02_b/Italian-style tomato.png',
    title: 'Italian-style tomato',
    time: '20 mins',
  },
  {
    image: '/Lab_02_b/Vegetable and shrimp spaghetti.png',
    title: 'Spaghetti with vegetables',
    time: '40 mins',
  },
  {
    image: '/Lab_02_b/Lotus delight salad.png',
    title: 'Lotus delight salad',
    time: '30 mins',
  },
  {
    image: '/Lab_02_b/Snack cakes.png',
    title: 'Snack cakes',
    time: '35 mins',
  },
]

export default function SummerRecipes() {
  return (
    <section className="py-14 px-8 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-pink-500 mb-2">This Summer Recipes</h2>
        <p className="text-sm text-gray-500">We have all your Independence Day sweets covered.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {recipes.map((recipe, i) => (
          <RecipeCard key={i} {...recipe} />
        ))}
      </div>
    </section>
  )
}
