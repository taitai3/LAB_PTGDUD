import { useState } from 'react'
import styles from './FilterPanel.module.css'

const TYPES = [
  'Pan-fried', 'Stir-fried',
  'Grilled', 'Roasted',
  'Sauteed', 'Baked',
  'Steamed', 'Stewed',
]

const RATINGS = [5, 4, 3, 2, 1]

// Rating images: rating_5 = 5 sao, rating_4 = 4 sao, ...
const ratingImages = {
  5: '/rating_5.png',
  4: '/rating_4.png',
  3: '/rating_3.png',
  2: '/rating_2.png',
  1: '/rating_1.png',
}

export default function FilterPanel({ filters, onChange }) {
  const [openSections, setOpenSections] = useState({
    type: true,
    time: true,
    rating: true,
  })

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const toggleType = (type) => {
    const current = filters.types || []
    const updated = current.includes(type)
      ? current.filter((t) => t !== type)
      : [...current, type]
    onChange({ ...filters, types: updated })
  }

  const toggleRating = (rating) => {
    const current = filters.ratings || []
    const updated = current.includes(rating)
      ? current.filter((r) => r !== rating)
      : [...current, rating]
    onChange({ ...filters, ratings: updated })
  }

  const handleTimeChange = (index, value) => {
    const newRange = [...(filters.timeRange || [30, 50])]
    newRange[index] = Number(value)
    if (index === 0 && newRange[0] > newRange[1]) newRange[0] = newRange[1]
    if (index === 1 && newRange[1] < newRange[0]) newRange[1] = newRange[0]
    onChange({ ...filters, timeRange: newRange })
  }

  const timeRange = filters.timeRange || [30, 50]
  const minTime = 0
  const maxTime = 120
  const leftPercent = ((timeRange[0] - minTime) / (maxTime - minTime)) * 100
  const rightPercent = ((timeRange[1] - minTime) / (maxTime - minTime)) * 100

  return (
    <aside className={styles.panel}>
      <div className={styles.panelHeader}>
        <img src="/list_filter.png" alt="" className={styles.filterIcon} />
        <span className={styles.panelTitle}>FILTERS</span>
      </div>

      {/* Type Section */}
      <div className={styles.section}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('type')}
          aria-expanded={openSections.type}
        >
          <span className={styles.sectionTitle}>Type</span>
          <svg
            className={`${styles.chevron} ${openSections.type ? styles.chevronOpen : ''}`}
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M5 8l5 5 5-5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {openSections.type && (
          <div className={styles.typeGrid}>
            {TYPES.map((type) => {
              const checked = (filters.types || []).includes(type)
              return (
                <label key={type} className={styles.checkboxLabel}>
                  <img
                    src={checked ? '/checkboxpink.png' : '/checkbox.png'}
                    alt=""
                    className={styles.checkboxImg}
                    onClick={() => toggleType(type)}
                  />
                  <span
                    className={`${styles.checkboxText} ${checked ? styles.checkboxTextChecked : ''}`}
                    onClick={() => toggleType(type)}
                  >
                    {type}
                  </span>
                </label>
              )
            })}
          </div>
        )}
      </div>

      <div className={styles.divider} />

      {/* Time Section */}
      <div className={styles.section}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('time')}
          aria-expanded={openSections.time}
        >
          <span className={styles.sectionTitle}>Time</span>
          <svg
            className={`${styles.chevron} ${openSections.time ? styles.chevronOpen : ''}`}
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M5 8l5 5 5-5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {openSections.time && (
          <div className={styles.sliderWrapper}>
            <div className={styles.sliderLabels}>
              <span>{timeRange[0]} minutes</span>
              <span>{timeRange[1]} minutes</span>
            </div>
            <div className={styles.sliderTrack}>
              <div
                className={styles.sliderFill}
                style={{ left: `${leftPercent}%`, width: `${rightPercent - leftPercent}%` }}
              />
              <input
                type="range"
                min={minTime}
                max={maxTime}
                value={timeRange[0]}
                onChange={(e) => handleTimeChange(0, e.target.value)}
                className={styles.rangeInput}
              />
              <input
                type="range"
                min={minTime}
                max={maxTime}
                value={timeRange[1]}
                onChange={(e) => handleTimeChange(1, e.target.value)}
                className={styles.rangeInput}
              />
            </div>
          </div>
        )}
      </div>

      <div className={styles.divider} />

      {/* Rating Section */}
      <div className={styles.section}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('rating')}
          aria-expanded={openSections.rating}
        >
          <span className={styles.sectionTitle}>Rating</span>
          <svg
            className={`${styles.chevron} ${openSections.rating ? styles.chevronOpen : ''}`}
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M5 8l5 5 5-5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {openSections.rating && (
          <div className={styles.ratingList}>
            {RATINGS.map((rating) => {
              const checked = (filters.ratings || []).includes(rating)
              return (
                <label key={rating} className={styles.ratingRow}>
                  <img
                    src={checked ? '/checkboxpink.png' : '/checkbox.png'}
                    alt=""
                    className={styles.checkboxImg}
                    onClick={() => toggleRating(rating)}
                  />
                  <img
                    src={ratingImages[rating]}
                    alt={`${rating} stars`}
                    className={styles.ratingImg}
                    onClick={() => toggleRating(rating)}
                  />
                </label>
              )
            })}
          </div>
        )}
      </div>

      <div className={styles.applyWrapper}>
        <button className={styles.applyBtn} onClick={() => onChange({ ...filters })}>
          Apply
        </button>
      </div>
    </aside>
  )
}
