import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './RecipeDetailPage.module.css'

export default function RecipeDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [detail, setDetail] = useState(null)
  const [loading, setLoading] = useState(true)
  const [bookmarked, setBookmarked] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((r) => r.json())
      .then((data) => {
        setDetail(data.meals?.[0] || null)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  const getIngredients = (d) => {
    const items = []
    for (let i = 1; i <= 20; i++) {
      const ing = d[`strIngredient${i}`]
      const measure = d[`strMeasure${i}`]
      if (ing && ing.trim()) {
        items.push({ name: ing.trim(), measure: measure?.trim() || '' })
      }
    }
    return items
  }

  return (
    <div className={styles.page}>
      <Navbar searchQuery="" onSearch={(q) => navigate(`/?search=${encodeURIComponent(q)}`)} />

      <main className={styles.main}>
        {loading ? (
          <div className={styles.loadingState}>
            <div className={styles.spinner} />
            <p>Loading recipe...</p>
          </div>
        ) : !detail ? (
          <div className={styles.loadingState}>
            <p>Recipe not found.</p>
            <button className={styles.backBtn} onClick={() => navigate(-1)}>← Go back</button>
          </div>
        ) : (
          <>
            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
              <button className={styles.breadcrumbLink} onClick={() => navigate(-1)}>
                ← Back to results
              </button>
              <span className={styles.breadcrumbSep}>/</span>
              <span className={styles.breadcrumbCurrent}>{detail.strMeal}</span>
            </div>

            <div className={styles.content}>
              {/* Left column */}
              <div className={styles.leftCol}>
                <div className={styles.imgWrapper}>
                  <img src={detail.strMealThumb} alt={detail.strMeal} className={styles.img} />
                </div>

                <div className={styles.metaTags}>
                  {detail.strCategory && <span className={styles.tag}>{detail.strCategory}</span>}
                  {detail.strArea && <span className={styles.tag}>{detail.strArea}</span>}
                  {detail.strTags && detail.strTags.split(',').filter(Boolean).map((t) => (
                    <span key={t} className={styles.tag}>{t.trim()}</span>
                  ))}
                </div>

                <div className={styles.actionRow}>
                  <button
                    className={`${styles.bookmarkBtn} ${bookmarked ? styles.bookmarkActive : ''}`}
                    onClick={() => setBookmarked((b) => !b)}
                  >
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                      <path
                        d="M5 3h10a1 1 0 011 1v13l-6-3-6 3V4a1 1 0 011-1z"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        fill={bookmarked ? '#fff' : 'none'}
                      />
                    </svg>
                    {bookmarked ? 'Saved' : 'Save Recipe'}
                  </button>

                  {detail.strYoutube && (
                    <a
                      href={detail.strYoutube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.youtubeBtn}
                    >
                      ▶ Watch Video
                    </a>
                  )}
                </div>
              </div>

              {/* Right column */}
              <div className={styles.rightCol}>
                <h1 className={styles.title}>{detail.strMeal}</h1>

                <div className={styles.infoRow}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Category</span>
                    <span className={styles.infoValue}>{detail.strCategory || '—'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Cuisine</span>
                    <span className={styles.infoValue}>{detail.strArea || '—'}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Cook Time</span>
                    <span className={styles.infoValue}>32 minutes</span>
                  </div>
                </div>

                {/* Ingredients */}
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Ingredients</h2>
                  <ul className={styles.ingredientGrid}>
                    {getIngredients(detail).map((item, i) => (
                      <li key={i} className={styles.ingredientItem}>
                        <span className={styles.dot} />
                        <span className={styles.ingredientMeasure}>{item.measure}</span>
                        <span className={styles.ingredientName}>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Instructions */}
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Instructions</h2>
                  <div className={styles.instructions}>
                    {detail.strInstructions
                      ?.split('\n')
                      .filter((line) => line.trim())
                      .map((line, i) => (
                        <p key={i} className={styles.instructionStep}>{line}</p>
                      ))}
                  </div>
                </section>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}
