import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'

const FAKE_USERS = [
  { username: 'admin', password: '123' },
  { username: 'user1', password: 'abc' },
]

export default function Login() {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    const found = FAKE_USERS.find(
      (u) => u.username === username && u.password === password
    )
    if (found) {
      dispatch(login({ username: found.username }))
      setError('')
    } else {
      setError('Sai tên đăng nhập hoặc mật khẩu!')
    }
  }

  return (
    <div className="flex flex-col items-center gap-3 p-6 border rounded-xl dark:border-gray-600 w-72">
      <h2 className="text-xl font-bold">Đăng nhập</h2>
      <input
        type="text"
        placeholder="Tên đăng nhập"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border px-3 py-2 rounded w-full dark:bg-gray-700 dark:border-gray-500"
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border px-3 py-2 rounded w-full dark:bg-gray-700 dark:border-gray-500"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded w-full"
      >
        Đăng nhập
      </button>
      <p className="text-xs text-gray-400">Thử: admin/123 hoặc user1/abc</p>
    </div>
  )
}
