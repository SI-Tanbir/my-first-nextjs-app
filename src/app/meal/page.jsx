"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";



const Page = () => {
   

  const [keyword, setKeyword] = useState(""); // State to store the input value
  const [searchResult, setSearchResult] = useState(null); // State to store search results
  const [loading, setLoading] = useState(false); // Loading state

  // Function to fetch data from the API
  const fetchMeals = async (keyword) => {
    if (!keyword.trim()) {
      setSearchResult(null); // Reset results if the keyword is empty
      return;
    }

    setLoading(true); // Show loading state
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
      );
      const data = await res.json();

      if (data.meals) {
        setSearchResult(data.meals);
      } else {
        setSearchResult([]); // No results found
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  // Fetch meals whenever the keyword changes
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchMeals(keyword);
    }, 500); // Debounce the API call by 500ms

    return () => clearTimeout(delayDebounce); // Cleanup previous timer
  }, [keyword]);

 
  return (
    <div className="p-6 flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Search Meals</h1>
      <div className="flex gap-2 w-full max-w-md">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for a meal..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)} // Update the keyword on input change
        />
      </div>

      {/* Display Loading State */}
      {loading && <p className="mt-4 text-gray-600">Searching...</p>}

      {/* Display Results */}
      <div className="mt-6 w-full max-w-md">
        {searchResult === null && (
          <p className="text-gray-600">Enter a keyword to search for meals.</p>
        )}
        {searchResult?.length === 0 && (
          <p className="text-red-500">No meals found. Try a different keyword.</p>
        )}
        {searchResult?.length > 0 && (
          <ul className="space-y-4 grid grid-cols-2">
            {searchResult.map((meal) => (
              <li
                key={meal.idMeal}
                className="p-4 border border-gray-300 rounded-md bg-white shadow-md"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {meal.strMeal}
                </h2>
                <p className="text-sm text-gray-600">{meal.strCategory}</p>
                <Image src={`${meal.strMealThumb}`} width={400} height={400} alt={`${meal.strMeal}`} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
  
export default Page;
