import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar({ searchQuery, onSearch }) {
  const [inputValue, setInputValue] = useState(searchQuery)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(inputValue)
    }
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src="/chefify.png" alt="Chefify logo" className={styles.logoImg} />
          <span className={styles.logoText}>Chefify</span>
        </div>
        <div className={styles.searchBox}>
          <svg className={styles.searchIcon} viewBox="0 0 20 20" fill="none">
            <circle cx="9" cy="9" r="6" stroke="#9CA3AF" strokeWidth="1.5" />
            <path d="M13.5 13.5L17 17" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            className={styles.searchInput}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search recipes..."
          />
        </div>
      </div>

      <nav className={styles.nav}>
        <a href="#" className={styles.navLink}>What to cook</a>
        <a href="#" className={styles.navLink}>Recipes</a>
        <a href="#" className={styles.navLink}>Ingredients</a>
        <a href="#" className={styles.navLink}>Occasions</a>
        <a href="#" className={styles.navLink}>About Us</a>
      </nav>

      <div className={styles.right}>
        <button className={styles.recipeBoxBtn}>
          <svg viewBox="0 0 20 20" fill="none" className={styles.bookmarkIcon}>
            <path
              d="M5 3h10a1 1 0 011 1v13l-6-3-6 3V4a1 1 0 011-1z"
              stroke="#E05C8A"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path d="M8 8h4" stroke="#E05C8A" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Your Recipe Box
        </button>
        <img src="/avatar.png" alt="User avatar" className={styles.avatar} />
      </div>
    </header>
  )
}
