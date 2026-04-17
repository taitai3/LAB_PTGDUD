import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../store/themeSlice'

export default function ThemeToggle() {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.mode)

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Toggle Theme ({theme})
    </button>
  )
}