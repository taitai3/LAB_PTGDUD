import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/authSlice'

export default function UserProfile() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)

  return (
    <div className="flex flex-col items-center gap-3 p-6 border rounded-xl dark:border-gray-600 w-72">
      <h2 className="text-xl font-bold">Hồ sơ người dùng</h2>
      <p className="text-gray-500 dark:text-gray-300">Xin chào,</p>
      <p className="text-2xl font-semibold text-blue-500">{user?.username}</p>
      <button
        onClick={() => dispatch(logout())}
        className="px-4 py-2 bg-red-500 text-white rounded w-full"
      >
        Đăng xuất
      </button>
    </div>
  )
}
