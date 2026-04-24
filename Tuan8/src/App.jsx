import { useState } from 'react'
import Navbar from './components/Navbar'
import FilterPanel from './components/FilterPanel'
import NoResults from './components/NoResults'
import Footer from './components/Footer'
import './App.css'

const DEFAULT_FILTERS = {
  types: ['Grilled', 'Roasted'],
  timeRange: [30, 50],
  ratings: [3, 2, 1],
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('cakescascsa')
  const [filters, setFilters] = useState(DEFAULT_FILTERS)

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handleTagClick = (tag) => {
    setSearchQuery(tag)
  }

  return (
    <div className="app">
      <Navbar searchQuery={searchQuery} onSearch={handleSearch} />

      <main className="main-layout">
        <FilterPanel filters={filters} onChange={setFilters} />
        <NoResults searchQuery={searchQuery} onTagClick={handleTagClick} />
      </main>

      <Footer />
    </div>
  )
}
