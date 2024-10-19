import React, { useState } from "react";
//import DynamicPosts from "../DynamicPosts/DynamicPosts";

function Banner() {
  let [category, setCategory] = useState();

  return (
    <div className="pt-20">
      <div>
        <div className="flex py-2 px-4 bg-gray-200">
          <div>
            <select
              name="Category"
              className="border bg-gray-200 rounded px-3 py-2"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option  value="null">ALL CATEGORIES</option>
              <option value="Cars">Cars</option>
              <option value="Cameras & Lenses">Cameras & Lenses</option>
              <option value="Cameras & Lenses">For Sales : House and Apartments</option>
              <option value="Computers & Laptops">Computers & Laptops</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="Motorcycles">Scooters</option>
              <option value="Motorcycles">Motorcycles</option>
              <option value="Tablets">For Rent : House and Apartments</option>
            </select>
          </div>
          <div className="ml-4 flex space-x-4">
            <span
              className="cursor-pointer font-bold text-xs"
              onClick={() => setCategory("Cars")}
            >
              Cars
            </span>
            <span
              className="cursor-pointer font-bold text-xs"
              onClick={() => setCategory("Cameras & Lenses")}
            >
              Cameras & Lenses
            </span>
            <span
              className="cursor-pointer font-bold text-xs"
              onClick={() => setCategory("For Sales : House and Apartments")}
            >
              For Sales : House and Apartments
            </span>
            <span
              className="cursor-pointer font-bold text-xs"
              onClick={() => setCategory("Computers & Laptops")}
            >
              Computers & Laptops
            </span>
            <span
              className="cursor-pointer font-bold text-xs"
              onClick={() => setCategory("Mobile Phones")}
            >
              Mobile Phones
            </span>
            <span
              className="cursor-pointer font-bold text-xs"
              onClick={() => setCategory("Scooters")}
            >
              Scooters
            </span>
            <span
              className="cursor-pointer font-bold text-xs"
              onClick={() => setCategory("Motorcycles")}
            >
              Motorcycles
            </span>
            <span
              className="cursor-pointer font-bold text-xs"
              onClick={() => setCategory(" For Rent: House and Apartments")}
            >
              For Rent: House and Apartments
            </span>
          </div>
        </div>
        <div className="relative w-full">
          <img
            src="/banner copy.png"
            alt=""
            className="w-full"
          />
        </div>
      </div>
      {/* {category != null && <DynamicPosts category={category} />} */}
    </div>
  );
}

export default Banner;
