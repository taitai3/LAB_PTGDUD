import { useState, useEffect } from 'react'

function App() {
  // posts gốc - không bao giờ thay đổi sau khi fetch
  const [allPosts, setAllPosts] = useState([])
  // posts hiển thị - kết quả sau khi filter
  const [displayPosts, setDisplayPosts] = useState([])
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch 1 lần duy nhất khi component mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setAllPosts(data)       // lưu data gốc
        setDisplayPosts(data)   // ban đầu hiển thị tất cả
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, []) // [] = chỉ chạy 1 lần

  // Khi user gõ vào input → filter từ allPosts, KHÔNG gọi API lại
  function handleSearch(e) {
    const value = e.target.value
    setSearchText(value)

    // Filter từ data gốc (allPosts), không mutate allPosts
    const filtered = allPosts.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    )
    setDisplayPosts(filtered)
  }

  if (loading) return <p>Đang tải dữ liệu...</p>
  if (error) return <p>Lỗi: {error}</p>

  return (
    <div>
      <h1>Danh sách Posts</h1>

      <input
        type="text"
        placeholder="Tìm kiếm theo title..."
        value={searchText}
        onChange={handleSearch}
      />

      <p>
        Hiển thị {displayPosts.length} / {allPosts.length} posts
      </p>

      <ul>
        {displayPosts.map((post) => (
          <li key={post.id}>
            <strong>#{post.id}</strong> {post.title}
          </li>
        ))}
      </ul>

      {displayPosts.length === 0 && <p>Không tìm thấy kết quả nào.</p>}
    </div>
  )
}

export default App
