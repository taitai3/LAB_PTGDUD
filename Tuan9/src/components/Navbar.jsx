export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/Lab_02/chefify.png" alt="Chefify" className="h-8" />
      </div>

      {/* Search */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
        <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="What would you like to cook?"
          className="bg-transparent text-sm outline-none w-full text-gray-500"
        />
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
        <a href="#" className="hover:text-pink-500 transition-colors">What to cook</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Recipes</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Ingredients</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Occasions</a>
        <a href="#" className="hover:text-pink-500 transition-colors">About Us</a>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3">
        <button className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors px-4 py-2 border border-gray-300 rounded-full">
          Login
        </button>
        <button className="text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 transition-colors px-4 py-2 rounded-full">
          Subscribe
        </button>
      </div>
    </nav>
  )
}
