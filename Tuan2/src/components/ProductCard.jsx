import React from 'react';

const ProductCard = () => {
  return (
    <div className="
      w-[280px] bg-white p-4 rounded-2xl 
      border border-gray-200 
      shadow-md 
      transition-all 
      hover:-translate-y-2 hover:shadow-2xl
      cursor-pointer
    ">
    
      <img 
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop" 
        alt="Giày Nike" 
        className="w-full h-48 object-cover rounded-xl mb-4" 
      />

      <h3 className="text-xl font-bold text-gray-800 mb-2">
        Nike Air Red
      </h3>
     
      <p className="text-red-500 font-bold text-lg mb-4">
        2.500.000 đ
      </p>

      <button className="
        w-full bg-blue-600 text-white py-2 rounded-lg font-medium
        hover:bg-blue-700 transition-colors
      ">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;