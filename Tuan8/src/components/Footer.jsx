import { useState } from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* About Us */}
        <div className={styles.aboutCol}>
          <h4 className={styles.colTitle}>About Us</h4>
          <p className={styles.aboutText}>
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <form className={styles.emailForm} onSubmit={handleSend}>
            <input
              type="email"
              className={styles.emailInput}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className={styles.sendBtn}>Send</button>
          </form>
        </div>

        {/* Spacer */}
        <div className={styles.spacer} />

        {/* Learn More */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Learn More</h4>
          <ul className={styles.linkList}>
            <li><a href="#">Our Cooks</a></li>
            <li><a href="#">See Our Features</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>

          <h4 className={`${styles.colTitle} ${styles.colTitleSpaced}`}>Shop</h4>
          <ul className={styles.linkList}>
            <li><a href="#">Gift Subscription</a></li>
            <li><a href="#">Send Us Feedback</a></li>
          </ul>
        </div>

        {/* Recipes */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Recipes</h4>
          <ul className={styles.linkList}>
            <li><a href="#">What to Cook This Week</a></li>
            <li><a href="#">Pasta</a></li>
            <li><a href="#">Dinner</a></li>
            <li><a href="#">Healthy</a></li>
            <li><a href="#">Vegetarian</a></li>
            <li><a href="#">Vegan</a></li>
            <li><a href="#">Christmas</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={styles.logoArea}>
          <img src="/chefifywhite.png" alt="Chefify" className={styles.logoImg} />
          <span className={styles.logoText}>Chefify</span>
        </div>
        <span className={styles.copyright}>2023 Chefify Company</span>
        <div className={styles.legal}>
          <a href="#">Terms of Service</a>
          <span className={styles.separator}>|</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
