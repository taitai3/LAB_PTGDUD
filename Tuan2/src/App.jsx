import ProductCard from './components/ProductCard';

function App() {
  return (
    // Flexbox căn giữa màn hình
    <div className="justify-center flex items-center min-h-screen bg-gray-100">
      <ProductCard />
    </div>
  );
}

export default App;