import { useSelector } from 'react-redux'

export default function Navbar() {
  const user = useSelector((state) => state.auth.user)

  return (
    <nav className="w-full px-8 py-3 bg-blue-600 text-white flex justify-between items-center">
      <span className="font-bold text-lg">Redux Demo App</span>
      <span className="text-sm">
        {user ? `👤 ${user.username}` : 'Chưa đăng nhập'}
      </span>
    </nav>
  )
}
