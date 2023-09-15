import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
            }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {product ? (
         <div
    
         className="rounded overflow-hidden shadow-lg text-center bg-white p-5  h-full mx-[550px]"
       >
          <h2>{product.title}</h2>
          <img
                    className="h-[150px] py-[10px] px-12  "
           src={product.image} alt={product.title} />
          <p  className="font-bold text-xl truncate ">{product.description}</p>

        </div>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
};

export default ProductDetail;
