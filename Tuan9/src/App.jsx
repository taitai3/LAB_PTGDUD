import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SummerRecipes from './components/SummerRecipes'
import RecipesWithVideos from './components/RecipesWithVideos'
import EditorsPick from './components/EditorsPick'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <SummerRecipes />
      <RecipesWithVideos />
      <EditorsPick />
      <Footer />
    </div>
  )
}

export default App
