import { useEffect, useState } from 'react'
import styles from './RecipeDetail.module.css'

export default function RecipeDetail({ meal, onClose }) {
  const [detail, setDetail] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!meal) return
    setLoading(true)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
      .then((r) => r.json())
      .then((data) => {
        setDetail(data.meals?.[0] || null)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [meal])

  // Close on backdrop click
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  // Get ingredients list
  const getIngredients = (d) => {
    const items = []
    for (let i = 1; i <= 20; i++) {
      const ing = d[`strIngredient${i}`]
      const measure = d[`strMeasure${i}`]
      if (ing && ing.trim()) {
        items.push(`${measure?.trim() || ''} ${ing.trim()}`.trim())
      }
    }
    return items
  }

  if (!meal) return null

  return (
    <div className={styles.backdrop} onClick={handleBackdrop}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
            <path d="M5 5l10 10M15 5L5 15" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {loading ? (
          <div className={styles.loading}>
            <div className={styles.spinner} />
            <p>Loading recipe...</p>
          </div>
        ) : detail ? (
          <div className={styles.content}>
            <div className={styles.imgCol}>
              <img src={detail.strMealThumb} alt={detail.strMeal} className={styles.img} />
              <div className={styles.meta}>
                {detail.strCategory && (
                  <span className={styles.tag}>{detail.strCategory}</span>
                )}
                {detail.strArea && (
                  <span className={styles.tag}>{detail.strArea}</span>
                )}
                {detail.strTags && detail.strTags.split(',').map((t) => (
                  <span key={t} className={styles.tag}>{t.trim()}</span>
                ))}
              </div>
              {detail.strYoutube && (
                <a
                  href={detail.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.youtubeBtn}
                >
                  ▶ Watch on YouTube
                </a>
              )}
            </div>

            <div className={styles.infoCol}>
              <h2 className={styles.title}>{detail.strMeal}</h2>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Ingredients</h3>
                <ul className={styles.ingredientList}>
                  {getIngredients(detail).map((item, i) => (
                    <li key={i} className={styles.ingredientItem}>
                      <span className={styles.dot} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Instructions</h3>
                <p className={styles.instructions}>{detail.strInstructions}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.loading}>
            <p>Could not load recipe details.</p>
          </div>
        )}
      </div>
    </div>
  )
}
