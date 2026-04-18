import { useState } from 'react'
import './App.css'

// ---- Navbar ----
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white/90 backdrop-blur-sm shadow-sm flex items-center px-6 py-3 gap-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mr-4">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="14" fill="#E91E8C" opacity="0.15" />
          <path d="M14 6c-1.5 0-5 2-5 7 0 2.5 1.5 4 3 4.5V22h4v-4.5c1.5-.5 3-2 3-4.5 0-5-3.5-7-5-7z" fill="#E91E8C" />
          <rect x="12" y="4" width="4" height="3" rx="1" fill="#E91E8C" />
        </svg>
        <span className="text-[#E91E8C] font-bold text-xl">Chefify</span>
      </div>

      {/* Search */}
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 gap-2 flex-1 max-w-xs">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <input
          type="text"
          placeholder="What would you like to cook?"
          className="bg-transparent text-sm text-gray-500 outline-none w-full"
        />
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-6 ml-4 text-sm text-gray-700 font-medium">
        <a href="#" className="hover:text-[#E91E8C] transition-colors">What to cook</a>
        <a href="#" className="hover:text-[#E91E8C] transition-colors">Recipes</a>
        <a href="#" className="hover:text-[#E91E8C] transition-colors">Ingredients</a>
        <a href="#" className="hover:text-[#E91E8C] transition-colors">Occasions</a>
        <a href="#" className="hover:text-[#E91E8C] transition-colors">About Us</a>
      </div>

      {/* Auth buttons */}
      <div className="flex items-center gap-3 ml-auto">
        <button className="text-sm font-medium text-gray-700 border border-gray-300 rounded-full px-5 py-1.5 hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors">
          Login
        </button>
        <button className="text-sm font-medium text-white bg-[#E91E8C] rounded-full px-5 py-1.5 hover:bg-[#c91578] transition-colors">
          Subscribe
        </button>
      </div>
    </nav>
  )
}

// ---- Modal ----
const slides = [
  {
    image: '/Image 93.png',
    alt: 'Discover Chefify',
  },
  {
    image: '/Image 72.png',
    alt: 'Delicious Recipes',
  },
  {
    image: '/Group 9.png',
    alt: 'Fresh Ingredients',
  },
]

function Modal({ onClose }) {
  const [current, setCurrent] = useState(0)

  const handleNext = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1)
    } else {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <div className="text-center mb-2">
          <h2 className="text-2xl font-bold text-[#E91E8C]">Discover Chefify</h2>
          <p className="text-gray-500 text-sm mt-1">
            Easy and delicious cooking instructions right here. Start exploring now!
          </p>
        </div>

        {/* Slide image */}
        <div className="mt-4 rounded-xl overflow-hidden h-64 w-full">
          <img
            src={slides[current].image}
            alt={slides[current].alt}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? 'bg-[#E91E8C]' : 'bg-gray-300'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          className="mt-5 w-full bg-[#E91E8C] hover:bg-[#c91578] text-white font-semibold py-3 rounded-full transition-colors"
        >
          {current < slides.length - 1 ? 'Next' : 'Get Started'}
        </button>

        {/* Skip */}
        <div className="text-center mt-3">
          <button
            onClick={onClose}
            className="text-[#E91E8C] text-sm hover:underline"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  )
}

// ---- Hero Section ----
function HeroSection() {
  return (
    <div className="relative min-h-screen pt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Image 73.png')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-10 md:px-20">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-xs text-white">
          <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">Recipe of the day</span>
          <h3 className="text-xl font-bold mt-3">Salad Caprese</h3>
          <p className="text-sm text-white/80 mt-1">
            Classic Italian Salad Caprese with fresh mozzarella, herbs, olive oil to
            create a refreshing dish.
          </p>
          <div className="flex items-center gap-2 mt-3 text-xs text-white/70">
            <span>🕐 20 min</span>
            <span>•</span>
            <span>Salad</span>
          </div>
          <button className="mt-4 bg-[#E91E8C] hover:bg-[#c91578] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
            View more
          </button>
        </div>
      </div>

      {/* Bottom credit */}
      <div className="absolute bottom-4 left-6 text-white/60 text-xs flex items-center gap-1">
        Made with
        <span className="font-bold text-white/80">Visily</span>
      </div>
    </div>
  )
}

// ---- App ----
function App() {
  const [showModal, setShowModal] = useState(true)

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default App
