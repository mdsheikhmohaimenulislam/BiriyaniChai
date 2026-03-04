import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const BiryaniCard = () => {
  const [ifterDatas, setIfterDatas] = useState([]);
  const [search, setSearch] = useState("");

  // Initial fetch - সব data load
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/ifterData`)
      .then((res) => res.json())
      .then((data) => setIfterDatas(data))
      .catch((err) => console.error(err));
  }, []);

  // Auto search on typing
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/ifterData?search=${search}`,
        );
        const data = await res.json();
        setIfterDatas(data);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [search]);

  return (
    <div>
      {/* Search Input */}
      <div className="mb-5 flex justify-center">
        <label className="input border rounded p-2 w-96 flex items-center gap-2">
          <svg
            className="h-5 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search District / Upazila / Mosque"
            className="w-full outline-none"
          />
        </label>
      </div>

      {/* Results */}
      <div className="sm:w-11/12 mx-auto md:w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ifterDatas.map((ifterData) => (
          <SingleCard key={ifterData._id} ifterData={ifterData} />
        ))}
      </div>
    </div>
  );
};

export default BiryaniCard;
