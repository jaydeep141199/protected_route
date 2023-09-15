import React, { useState, useEffect } from "react";
import { NavLink} from "react-router-dom";

const Products = () => {
  const [product, setProductData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

    
          setProductData(data);


      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>

        <div className="text-center bg-gray-400">
          <div className="grid grid-cols-4 gap-4 p-5">
            {product.map((item) => (
              <div
                key={item.id}
                className="rounded overflow-hidden shadow-lg items-center bg-white p-5"
              >
           
           <NavLink to={`/dashboard/product/${item.id}`}>

                  <img
                    className="h-[150px] py-[10px] w-full transition duration-700 ease-in-out hover:scale-125"
                    src={item.image}
                    alt={item.title}
                  />
                </NavLink>
                <div className="py-4">
                  <div className="font-bold text-xl h-[35px]">
                    {item.title.length > 30
                      ? item.title.substr(0, 15) + "..."
                      : item.title}
                  </div>
                </div>
                <div className="font-medium h-[95px]">
                  {item.description.length > 60
                    ? item.description.substr(0, 60) + "..."
                    : item.description}
                </div>
                <div className="p-5">
                  <label htmlFor="" className="font-bold">
                    PRICE :
                  </label>
                  <span className="bg-gray-200 font-bold rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                    &#8377;{item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
  
    </>
  );
};

export default Products;
