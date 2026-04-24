import { useState, useEffect, useCallback } from 'react'
import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import FilterPanel from './components/FilterPanel'
import NoResults from './components/NoResults'
import RecipeGrid from './components/RecipeGrid'
import Pagination from './components/Pagination'
import Footer from './components/Footer'
import RecipeDetailPage from './pages/RecipeDetailPage'
import './App.css'

const DEFAULT_FILTERS = {
  types: ['Grilled', 'Roasted'],
  timeRange: [30, 50],
  ratings: [3, 2, 1],
}

const PAGE_SIZE = 9

function SearchPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const initialQuery = searchParams.get('search') || 'Salad'

  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [allMeals, setAllMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOrder, setSortOrder] = useState('A-Z')
  const [bookmarked, setBookmarked] = useState([])

  const fetchMeals = useCallback((query) => {
    if (!query.trim()) return
    setLoading(true)
    setCurrentPage(1)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`)
      .then((r) => r.json())
      .then((data) => {
        setAllMeals(data.meals || [])
        setLoading(false)
      })
      .catch(() => {
        setAllMeals([])
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetchMeals(initialQuery)
  }, [])

  const handleSearch = (query) => {
    setSearchQuery(query)
    fetchMeals(query)
  }

  const handleTagClick = (tag) => {
    setSearchQuery(tag)
    fetchMeals(tag)
  }

  const handleBookmark = (id) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    )
  }

  const sortedMeals = [...allMeals].sort((a, b) => {
    if (sortOrder === 'A-Z') return a.strMeal.localeCompare(b.strMeal)
    if (sortOrder === 'Z-A') return b.strMeal.localeCompare(a.strMeal)
    return 0
  })

  const totalPages = Math.ceil(sortedMeals.length / PAGE_SIZE)
  const pageMeals = sortedMeals.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
  const hasResults = allMeals.length > 0

  return (
    <div className="app">
      <Navbar searchQuery={searchQuery} onSearch={handleSearch} />

      <main className="main-layout">
        <FilterPanel filters={filters} onChange={setFilters} />

        <div className="results-area">
          {loading ? (
            <div className="loading-state">
              <div className="spinner" />
              <p>Searching recipes...</p>
            </div>
          ) : hasResults ? (
            <>
              <div className="results-header">
                <h2 className="results-title">
                  {searchQuery} <span className="results-count">({allMeals.length})</span>
                </h2>
                <select
                  className="sort-select"
                  value={sortOrder}
                  onChange={(e) => { setSortOrder(e.target.value); setCurrentPage(1) }}
                >
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                </select>
              </div>

              <RecipeGrid
                meals={pageMeals}
                onBookmark={handleBookmark}
                bookmarked={bookmarked}
              />

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <NoResults searchQuery={searchQuery} onTagClick={handleTagClick} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/recipe/:id" element={<RecipeDetailPage />} />
    </Routes>
  )
}
