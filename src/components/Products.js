import React from "react";
import ProductsCard from "../assets/ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="py-10 px-5">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="w-20 h-3 bg-black"></span>
        <p className="max-w-md text-gray-700 text-center px-4">
          Lorem ipsum dolor sit amet consectetur adipising elit. explicabo, quos
          fugit inventore, cumque quae corporls ration tenetur eos voluptates
          neque soluta aperiam omnis persipiciatis reiciendis asperiores
          repudiandae assumenda quidem.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
