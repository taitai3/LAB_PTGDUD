import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CounterDisplay from './components/CounterDisplay'
import CounterControls from './components/CounterControls'
import ThemeToggle from './components/ThemeToggle'
import Login from './components/Login'
import UserProfile from './components/UserProfile'
import Navbar from './components/Navbar'

function App() {
  const theme = useSelector((state) => state.theme.mode)
  const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="min-h-screen flex flex-col items-center bg-white dark:bg-gray-900 text-black dark:text-white transition-all">

      {/* Navbar hiển thị username ở mọi nơi */}
      <Navbar />

      <div className="flex flex-col items-center gap-8 mt-10 w-full max-w-xl px-4">

        {/* Bài 2: Theme Toggle */}
        <section className="w-full border rounded-xl p-6 dark:border-gray-600">
          <h2 className="text-xl font-bold mb-4">Bài 2 – Theme Toggle</h2>
          <ThemeToggle />
        </section>

        {/* Bài 1: Counter */}
        <section className="w-full border rounded-xl p-6 dark:border-gray-600">
          <h2 className="text-xl font-bold mb-4">Bài 1 – Counter Global</h2>
          <CounterDisplay />
          <CounterControls />
        </section>

        {/* Bài 3: Auth */}
        <section className="w-full border rounded-xl p-6 dark:border-gray-600">
          <h2 className="text-xl font-bold mb-4">Bài 3 – Auth (Login/Logout)</h2>
          {user ? <UserProfile /> : <Login />}
        </section>

      </div>
    </div>
  )
}

export default App
