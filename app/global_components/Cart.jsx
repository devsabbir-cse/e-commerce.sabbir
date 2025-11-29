'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

const Cart = () => {
  const [products, setProducts] = useState([]);
// State for cart products
    const [cartProducts, setCartProducts] = useState({});

    const handleAddProduct = (productId) => {
    setCartProducts(prev => {
        // আগের quantity নাও, আর +1 করো
        const newQuantity = (prev[productId] || 0) + 1;
        
        // নতুন object তৈরি করো
        const newCart = { ...prev, [productId]: newQuantity };

        // console এ দেখাও JSON আকারে
        console.log("Cart Status:", JSON.stringify(newCart, null, 2));

        return newCart;
    });
    };



  useEffect(() => {
    fetch("/Data/ProductCartDataDashbord.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 py-3">
      {products.map((product,index) => (
        <div 
        className="p-1 rounded-xl shadow-lg bg-white 
                     hover:shadow-2xl hover:-translate-y-2 
                     transition-all duration-300 cursor-pointer group"
        key={index} >
        <div 
          
          className=""
        >

          {/* Image Box */}
          <div className="h-[200px] overflow-hidden relative">
            <Image 
              src={product.img}
              
              fill
              alt={product.name}
              
              className="rounded-t-lg object-cover w-full h-full 
                         group-hover:scale-110 transition-all duration-500"
            />
          </div>


        <div className="px-1">
          {/* Product Info */}
          <h2 className="font-bold text-xl mt-3 group-hover:text-orange-600 transition">
            {product.name}
          </h2>

          {/* Price + Discount */}
          <div className="flex gap-x-2 mt-1">
            <p className="text-orange-600 font-semibold text-xl">৳{product.price}</p>
            <p className="text-green-600 text-sm bg-green-100 px-1 rounded">
              -{product.discount}
            </p>
          </div>

          {/* Rating + Sale */}
          <div className="flex gap-x-2 items-center mt-1 text-gray-600 ">
            <p className="text-yellow-500 text-xs">{product.rating}</p>
            <p className="text-base">({product.totalSale}) sold</p>
          </div>         

        </div>

        </div>
        <div className="bg-orange-600 hover:bg-orange-700 rounded-b-xl "
        onClick={()=> handleAddProduct(product.id)}
        >
            <p className="py-2 text-center text-white font-bold text-lg">ADD TO CART</p>
          </div>
            
        </div>
        
      ))}
    </div>
  );
};

export default Cart;
