import styles from './NoResults.module.css'

const SUGGESTED_TAGS = ['Sweet Cake', 'Black Cake', 'Pozole Verde', 'Healthy food']

export default function NoResults({ searchQuery, onTagClick }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Sorry, no results were found for &ldquo;{searchQuery}&rdquo;
      </h1>

      <img
        src="/nothing.png"
        alt="No results found"
        className={styles.illustration}
      />

      <p className={styles.subtitle}>
        We have all your Independence Day sweets covered.
      </p>

      <div className={styles.tags}>
        {SUGGESTED_TAGS.map((tag) => (
          <button
            key={tag}
            className={styles.tag}
            onClick={() => onTagClick && onTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
