import { Link } from 'react-router-dom'
import styles from './RecipeGrid.module.css'

export default function RecipeGrid({ meals, onBookmark, bookmarked }) {
  if (!meals || meals.length === 0) return null

  return (
    <div className={styles.grid}>
      {meals.map((meal) => (
        <div key={meal.idMeal} className={styles.card}>
          <Link to={`/recipe/${meal.idMeal}`} className={styles.cardLink}>
            <div className={styles.imgWrapper}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className={styles.img}
                loading="lazy"
              />
            </div>
          </Link>

          <div className={styles.cardBody}>
            <div className={styles.cardInfo}>
              <Link to={`/recipe/${meal.idMeal}`} className={styles.titleLink}>
                <h3 className={styles.cardTitle}>{meal.strMeal}</h3>
              </Link>
              <button
                className={`${styles.bookmarkBtn} ${bookmarked?.includes(meal.idMeal) ? styles.bookmarkActive : ''}`}
                onClick={() => onBookmark && onBookmark(meal.idMeal)}
                aria-label="Bookmark recipe"
              >
                <svg viewBox="0 0 20 20" fill="none" className={styles.bookmarkIcon}>
                  <path
                    d="M5 3h10a1 1 0 011 1v13l-6-3-6 3V4a1 1 0 011-1z"
                    stroke="#E05C8A"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    fill={bookmarked?.includes(meal.idMeal) ? '#E05C8A' : 'none'}
                  />
                </svg>
              </button>
            </div>
            <span className={styles.time}>32 minutes</span>
          </div>
        </div>
      ))}
    </div>
  )
}
