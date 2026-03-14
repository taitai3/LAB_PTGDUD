// src/App.jsx
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Chỉ chạy 1 lần

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Danh sách Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;