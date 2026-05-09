export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-8 mt-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* About */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-semibold mb-3">About Us</h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-xs text-gray-300 px-3 py-2 rounded-l-full outline-none flex-1 border border-gray-700 focus:border-pink-400"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white text-xs px-4 py-2 rounded-r-full transition-colors font-medium">
                Send
              </button>
            </div>
          </div>

          {/* Learn More */}
          <div>
            <h4 className="text-white font-semibold mb-3">Learn More</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Our Chefs</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">See Our Features</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Gift Subscription</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Send My Feedback</a></li>
            </ul>
          </div>

          {/* Recipes */}
          <div>
            <h4 className="text-white font-semibold mb-3">Recipes</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">What to Cook This Week</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Dinner</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Healthy</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Vegetarian</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Vegan</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Christmas</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img src="/Lab_02/chefify.png" alt="Chefify" className="h-6 brightness-0 invert" />
            <span className="text-xs text-gray-500">© 2022 Chefify Company</span>
          </div>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
