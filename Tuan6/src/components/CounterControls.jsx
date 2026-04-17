import { useDispatch } from 'react-redux'
import { increment, decrement } from '../store/counterSlice'

export default function CounterControls() {
  const dispatch = useDispatch()

  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        +
      </button>

      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        -
      </button>
    </div>
  )
}