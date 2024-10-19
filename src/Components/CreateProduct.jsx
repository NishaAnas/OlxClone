import React, { useState } from "react";
import Header from "./Header";
import { useProduct } from "../ContextStore/ProductContext"; 

const CreateProduct = () => {
  const { addProduct } = useProduct();  
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    try {
      await addProduct(name, category, price, description, image);
      alert("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 bg-gray-100">
        <Header />
      <div className="flex flex-col items-center justify-center flex-grow bg-gray-100 overflow-y-auto mt-20 mb-3">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6">Create Product</h2>

          <label className="block mb-2 font-bold">Name</label>
          <input
            className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="block mb-2 font-bold">Category</label>
          <select
            className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>Select Category</option>
            <option value="Cars">Cars</option>
            <option value="Cameras & Lenses">Cameras & Lenses</option>
            <option value="Computers & Laptops">Computers & Laptops</option>
            <option value="Mobile Phones">Mobile Phones</option>
            <option value="Motorcycles">Motorcycles</option>
            <option value="Tablets">Tablets</option>
          </select>

          <label className="block mb-2 font-bold">Price</label>
          <input
            className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label className="block mb-2 font-bold">Description</label>
          <input
            className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label className="block mb-2 font-bold">Image</label>
          <input
            className="w-full mb-4 p-2"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Upload and Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
