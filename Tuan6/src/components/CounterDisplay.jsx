import { useSelector } from 'react-redux'

export default function CounterDisplay() {
  const count = useSelector((state) => state.counter.value)

  return (
    <div className="text-2xl font-bold">
      Count: {count}
    </div>
  )
}