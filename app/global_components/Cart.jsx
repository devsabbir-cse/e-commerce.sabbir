'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState({});

  const handleAddProduct = (productId) => {
    setCartProducts(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const handleRemoveProduct = (productId) => {
    setCartProducts(prev => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 0) - 1, 0)
    }));
  };

  const handleDeleteCartProduct = (productId) => {
    setCartProducts(prev => ({
      ...prev,
      [productId]: 0
    }));
  };

  const handleInputChange = (productId, value) => {
    // খালি হলে শুধু "" রাখো
    if (value === "") {
      setCartProducts(prev => ({
        ...prev,
        [productId]: ""
      }));
      return;
    }

    const num = parseInt(value);
    if (!isNaN(num) && num >= 0) {
      setCartProducts(prev => ({
        ...prev,
        [productId]: num
      }));
    }
  };

  useEffect(() => {
    console.log("cartProducts:", cartProducts);
  }, [cartProducts]);

  useEffect(() => {
    fetch("/Data/ProductCartDataDashbord.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 py-3">
      {products.map((product, index) => {
        const quantity = cartProducts[product.id];

        const showAddToCart =
          quantity === undefined || quantity === 0;

        return (
          <div
            className="p-1 rounded-xl shadow-lg bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            key={index}
          >
            <div>
              <div className="h-[200px] overflow-hidden relative">
                <Image
                  src={product.img}
                  fill
                  alt={product.name}
                  className="rounded-t-lg object-cover w-full h-full group-hover:scale-110 transition-all duration-500"
                />
              </div>

              <div className="px-1">
                <h2 className="font-bold text-xl mt-3 group-hover:text-orange-600 transition">
                  {product.name}
                </h2>

                <div className="flex gap-x-2 mt-1">
                  <p className="text-orange-600 font-semibold text-xl">৳{product.price}</p>
                  <p className="text-green-600 text-sm bg-green-100 px-1 rounded">
                    -{product.discount}
                  </p>
                </div>

                <div className="flex gap-x-2 items-center mt-1 text-gray-600 ">
                  <p className="text-yellow-500 text-xs">{product.rating}</p>
                  <p className="text-base">({product.totalSale}) sold</p>
                </div>
              </div>
            </div>

            {showAddToCart ? (
              <div className="bg-orange-600 hover:bg-orange-700 rounded-b-xl text-white h-12 flex items-center justify-center"
               onClick={() => handleAddProduct(product.id)}>
                <p className="font-bold text-lg">ADD TO CART</p>
              </div>

            ) : (
              <div className="relative">
                <Trash2 
                        size={20} 
                        onClick={() => handleDeleteCartProduct(product.id)} 
                        className="cursor-pointer text-white absolute -top-11 bg-orange-600/95 rounded-full w-10 h-10 p-2 right-0 hover:bg-orange-700"
                      />
                  <div className="bg-orange-600 rounded-b-xl text-white px-2 h-12 flex items-center hover:bg-orange-700  ">
                    
                      <div className="w-full flex px-2 gap-x-3 justify-between items-center text-center ">
                        <Minus 
                            size={50}
                            className="text-white cursor-pointer" 
                            onClick={() => handleRemoveProduct(product.id)}
                          />

                        {/* Input */}
                        <input
                          type="number"
                          className="w-full text-center border-2 rounded py-1 font-bold text-lg bg-white text-black"
                          value={quantity === "" ? "" : quantity}
                          onChange={(e) => handleInputChange(product.id, e.target.value)}
                          onBlur={() => {
                            if (cartProducts[product.id] === "") {
                              setCartProducts(prev => ({
                                ...prev,
                                [product.id]: 0
                              }));
                            }
                          }}
                        />
                        

                          <Plus 
                          size={50}
                            className="text-white cursor-pointer" 
                            onClick={() => handleAddProduct(product.id)}
                          />

                      </div>
                  </div>

              </div>


            )}
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
